// server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 5001;

// --- Middleware ---
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000'
    ]
}));
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Recharge',
    password: 'password',
    port: 5000, // Default PostgreSQL port
});

// Test DB connection
pool.connect()
    .then(() => console.log("✅ Connected to PostgreSQL"))
    .catch(err => console.error("❌ DB Connection Error:", err));

// Route: test
app.get('/', (req, res) => {
    res.send('QuickRecharge backend is running 🚀');
});

// Route: save recharge (Normalized)
app.post('/api/recharge', async (req, res) => {
    const { serviceType, accountNumber, operator, planAmount, paymentMethod } = req.body;

    // 1. Basic validation
    if (!serviceType || !accountNumber || !operator || !planAmount || !paymentMethod) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // 2. Get a client from the pool for a transaction
    const client = await pool.connect();

    try {
        // 3. Start the transaction
        await client.query('BEGIN');

        // 4. Find or Create the customer account_id (UPSERT)
        const upsertAccountQuery = `
            WITH ins AS (
                INSERT INTO customer_accounts (account_number)
                VALUES ($1)
                ON CONFLICT (account_number) DO NOTHING
                RETURNING account_id
            )
            SELECT account_id FROM ins
            UNION ALL
            SELECT account_id FROM customer_accounts WHERE account_number = $1;
        `;
        const accountRes = await client.query(upsertAccountQuery, [accountNumber]);
        const accountId = accountRes.rows[0].account_id;

        // 5. Find the plan_id by joining services, providers, and plans
        const findPlanQuery = `
            SELECT p.plan_id
            FROM plans p
            JOIN providers pr ON p.provider_id = pr.provider_id
            JOIN services s ON pr.service_id = s.service_id
            WHERE s.service_name = $1 AND pr.provider_name = $2 AND p.price = $3;
        `;
        const planRes = await client.query(findPlanQuery, [serviceType, operator, planAmount]);

        if (planRes.rows.length === 0) {
            // If no plan is found, the DB is out of sync with the frontend.
            throw new Error('Plan not found. Please check service, operator, and price.');
        }
        const planId = planRes.rows[0].plan_id;

        // 6. We have all IDs. Now, insert the final transaction.
        const transactionId = uuidv4();
        const createdAt = new Date();
        
        const insertTransactionQuery = `
            INSERT INTO transactions (transaction_id, account_id, plan_id, payment_method, created_at)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const transactionRes = await client.query(insertTransactionQuery, [
            transactionId,
            accountId,
            planId,
            paymentMethod,
            createdAt
        ]);

        // 7. Commit the transaction
        await client.query('COMMIT');

        // 8. Send the successful response
        res.status(201).json({
            message: "Recharge saved successfully",
            transaction: transactionRes.rows[0]
        });

    } catch (err) {
        // 9. If any error occurred, rollback the transaction
        await client.query('ROLLBACK');
        console.error("Transaction Error:", err);
        res.status(500).json({ error: "Server error during transaction", details: err.message });
    } finally {
        // 10. Always release the client back to the pool
        client.release();
    }
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});

