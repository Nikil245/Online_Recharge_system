
// Plans data by operator
const plans = {
    mobile: {
        Airtel: [
            { price: 179, validity: "28 days", data: "1GB/day", description: "Unlimited Calls" },
            { price: 299, validity: "28 days", data: "1.5GB/day", description: "Unlimited Calls + 100 SMS/day" },
            { price: 479, validity: "56 days", data: "1.5GB/day", description: "Unlimited Calls + Disney+ Hotstar" },
            { price: 549, validity: "56 days", data: "2GB/day", description: "Unlimited Calls + Amazon Prime" },
            { price: 839, validity: "84 days", data: "2GB/day", description: "Unlimited + OTT Benefits" },
            { price: 3359, validity: "365 days", data: "2.5GB/day", description: "Yearly Plan + All OTT" }
        ],
        Jio: [
            { price: 155, validity: "28 days", data: "1GB/day", description: "Unlimited Calls" },
            { price: 209, validity: "28 days", data: "1.5GB/day", description: "Unlimited Calls + 100 SMS/day" },
            { price: 399, validity: "56 days", data: "2GB/day", description: "Unlimited + JioTV, JioCinema" },
            { price: 533, validity: "56 days", data: "2GB/day", description: "Unlimited + Premium OTT" },
            { price: 719, validity: "84 days", data: "1.5GB/day", description: "Unlimited + JioApps" },
            { price: 2999, validity: "365 days", data: "2.5GB/day", description: "Annual Plan + All Benefits" }
        ],
        VI: [
            { price: 179, validity: "28 days", data: "1GB/day", description: "Unlimited Calls" },
            { price: 299, validity: "28 days", data: "1.5GB/day", description: "Unlimited Calls + Weekend Data" },
            { price: 479, validity: "56 days", data: "1.5GB/day", description: "Unlimited + Vi Movies & TV" },
            { price: 539, validity: "56 days", data: "2GB/day", description: "Unlimited + Binge All Night" },
            { price: 839, validity: "84 days", data: "2GB/day", description: "Unlimited + OTT Benefits" },
            { price: 3099, validity: "365 days", data: "2GB/day", description: "Yearly Plan + Entertainment" }
        ],
        BSNL: [
            { price: 108, validity: "26 days", data: "1GB/day", description: "Unlimited Calls" },
            { price: 187, validity: "28 days", data: "2GB/day", description: "Unlimited Calls + 100 SMS/day" },
            { price: 319, validity: "54 days", data: "1.5GB/day", description: "Unlimited + BSNL Tunes" },
            { price: 397, validity: "56 days", data: "2GB/day", description: "Unlimited + Value Benefits" },
            { price: 797, validity: "90 days", data: "2GB/day", description: "Unlimited + Long Validity" },
            { price: 2399, validity: "365 days", data: "2GB/day", description: "Annual Plan" }
        ]
    },
    wifi: {
        "Airtel Xstream": [
            { price: 499, validity: "1 month", speed: "40 Mbps", description: "Unlimited Data" },
            { price: 799, validity: "1 month", speed: "100 Mbps", description: "Unlimited + Xstream App" },
            { price: 999, validity: "1 month", speed: "200 Mbps", description: "Unlimited + Prime Video" },
            { price: 1499, validity: "1 month", speed: "300 Mbps", description: "Unlimited + All OTT" }
        ],
        "Jio Fiber": [
            { price: 399, validity: "1 month", speed: "30 Mbps", description: "Unlimited Data" },
            { price: 699, validity: "1 month", speed: "100 Mbps", description: "Unlimited + 14 OTT Apps" },
            { price: 999, validity: "1 month", speed: "300 Mbps", description: "Unlimited + Premium OTT" },
            { price: 1499, validity: "1 month", speed: "500 Mbps", description: "Unlimited + All Benefits" }
        ],
        "ACT Fibernet": [
            { price: 599, validity: "1 month", speed: "50 Mbps", description: "500GB Data" },
            { price: 799, validity: "1 month", speed: "100 Mbps", description: "Unlimited Data" },
            { price: 1049, validity: "1 month", speed: "200 Mbps", description: "Unlimited + OTT" },
            { price: 1349, validity: "1 month", speed: "300 Mbps", description: "Unlimited + Premium" }
        ],
        "BSNL Fiber": [
            { price: 449, validity: "1 month", speed: "30 Mbps", description: "3.3TB Data" },
            { price: 799, validity: "1 month", speed: "100 Mbps", description: "Unlimited Data" },
            { price: 999, validity: "1 month", speed: "200 Mbps", description: "Unlimited + Benefits" },
            { price: 1299, validity: "1 month", speed: "300 Mbps", description: "Unlimited + Premium" }
        ]
    },
    tv: {
        "Tata Play": [
            { price: 299, validity: "1 month", channels: "Basic HD", description: "200+ Channels" },
            { price: 499, validity: "1 month", channels: "Family HD", description: "300+ Channels + Sports" },
            { price: 699, validity: "1 month", channels: "Premium HD", description: "400+ Channels + Movies" },
            { price: 999, validity: "1 month", channels: "Ultimate 4K", description: "500+ Channels + All OTT" }
        ],
        "Airtel Digital TV": [
            { price: 279, validity: "1 month", channels: "Basic", description: "180+ Channels" },
            { price: 459, validity: "1 month", channels: "Family HD", description: "280+ Channels + HD" },
            { price: 649, validity: "1 month", channels: "Premium", description: "380+ Channels + Premium" },
            { price: 899, validity: "1 month", channels: "Ultimate", description: "450+ Channels + Xstream" }
        ],
        "Dish TV": [
            { price: 249, validity: "1 month", channels: "Basic", description: "150+ Channels" },
            { price: 449, validity: "1 month", channels: "Family", description: "250+ Channels + HD" },
            { price: 629, validity: "1 month", channels: "Premium", description: "350+ Channels + Movies" },
            { price: 879, validity: "1 month", channels: "Ultimate", description: "450+ Channels + Sports" }
        ],
        "Sun Direct": [
            { price: 199, validity: "1 month", channels: "Basic", description: "120+ Channels" },
            { price: 399, validity: "1 month", channels: "Family", description: "220+ Channels" },
            { price: 599, validity: "1 month", channels: "Premium", description: "320+ Channels + HD" },
            { price: 799, validity: "1 month", channels: "Ultimate", description: "420+ Channels + Premium" }
        ]
    }
};

let selectedPlan = null;
let selectedPayment = null;
let currentService = 'mobile';
let currentOperator = null;

// Initialize
window.onload = function () {
    // Add event listeners for operator selection
    document.getElementById('mobileOperator').addEventListener('change', function () {
        currentOperator = this.value;
        if (currentOperator) {
            loadPlans('mobile', currentOperator);
        } else {
            document.getElementById('mobilePlans').innerHTML = '<p style="text-align: center; color: #999;">Please select an operator to view plans</p>';
        }
    });

    document.getElementById('wifiProvider').addEventListener('change', function () {
        currentOperator = this.value;
        if (currentOperator) {
            loadPlans('wifi', currentOperator);
        } else {
            document.getElementById('wifiPlans').innerHTML = '<p style="text-align: center; color: #999;">Please select a provider to view plans</p>';
        }
    });

    document.getElementById('tvProvider').addEventListener('change', function () {
        currentOperator = this.value;
        if (currentOperator) {
            loadPlans('tv', currentOperator);
        } else {
            document.getElementById('tvPlans').innerHTML = '<p style="text-align: center; color: #999;">Please select a provider to view plans</p>';
        }
    });

    // Initialize with message
    document.getElementById('mobilePlans').innerHTML = '<p style="text-align: center; color: #999;">Please select an operator to view plans</p>';
};

function switchTab(service) {
    currentService = service;
    selectedPlan = null;
    currentOperator = null;

    // Update tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.closest('.tab').classList.add('active');

    // Update sections
    document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
    document.getElementById(service).classList.add('active');

    // Reset plans display
    const plansContainer = document.getElementById(service + 'Plans');
    plansContainer.innerHTML = '<p style="text-align: center; color: #999;">Please select an operator/provider to view plans</p>';

    updateSummary();
}

function loadPlans(service, operator) {
    const plansContainer = document.getElementById(service + 'Plans');
    plansContainer.innerHTML = '';

    if (!operator || !plans[service][operator]) {
        plansContainer.innerHTML = '<p style="text-align: center; color: #999;">Please select an operator to view plans</p>';
        return;
    }

    const operatorPlans = plans[service][operator];

    operatorPlans.forEach((plan, index) => {
        const planCard = document.createElement('div');
        planCard.className = 'plan-card';
        planCard.onclick = () => selectPlan(service, operator, index);

        let details = '';
        if (service === 'mobile') {
            details = `
                        <div class="plan-validity">${plan.data}</div>
                        <div class="plan-validity">${plan.validity}</div>
                        <div style="font-size: 0.85em; color: #888; margin-top: 5px;">${plan.description}</div>
                    `;
        } else if (service === 'wifi') {
            details = `
                        <div class="plan-validity">${plan.speed}</div>
                        <div class="plan-validity">${plan.validity}</div>
                        <div style="font-size: 0.85em; color: #888; margin-top: 5px;">${plan.description}</div>
                    `;
        } else {
            details = `
                        <div class="plan-validity">${plan.channels}</div>
                        <div class="plan-validity">${plan.validity}</div>
                        <div style="font-size: 0.85em; color: #888; margin-top: 5px;">${plan.description}</div>
                    `;
        }

        planCard.innerHTML = `
                    <div class="plan-price">₹${plan.price}</div>
                    ${details}
                `;

        plansContainer.appendChild(planCard);
    });
}

function selectPlan(service, operator, index) {
    document.querySelectorAll(`#${service}Plans .plan-card`).forEach(card => {
        card.classList.remove('selected');
    });

    event.target.closest('.plan-card').classList.add('selected');
    selectedPlan = plans[service][operator][index];
    updateSummary();
}

function selectPayment(method) {
    selectedPayment = method;

    document.querySelectorAll('.payment-method').forEach(pm => pm.classList.remove('selected'));
    event.target.closest('.payment-method').classList.add('selected');

    document.querySelectorAll('.payment-details').forEach(pd => pd.classList.remove('active'));
    document.getElementById(method + 'Details').classList.add('active');
}

function updateSummary() {
    const serviceNames = {
        mobile: 'Mobile Recharge',
        wifi: 'WiFi/Broadband',
        tv: 'TV/Cable'
    };

    document.getElementById('summaryService').textContent = serviceNames[currentService];

    let account = '-';
    if (currentService === 'mobile') {
        account = document.getElementById('mobileNumber').value || '-';
    } else if (currentService === 'wifi') {
        account = document.getElementById('wifiAccount').value || '-';
    } else {
        account = document.getElementById('tvAccount').value || '-';
    }
    document.getElementById('summaryAccount').textContent = account;

    const amount = selectedPlan ? selectedPlan.price : 0;
    document.getElementById('summaryAmount').textContent = '₹' + amount;
    document.getElementById('summaryTotal').textContent = '₹' + amount;
}

// Update summary on input
document.addEventListener('input', updateSummary);

// **** START OF UPDATED FUNCTION ****
async function processRecharge() {
    // Validation
    let account = '';
    let operator = '';

    if (currentService === 'mobile') {
        account = document.getElementById('mobileNumber').value;
        operator = document.getElementById('mobileOperator').value;

        if (!account || account.length !== 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }
        if (!operator) {
            alert('Please select an operator');
            return;
        }
    } else if (currentService === 'wifi') {
        account = document.getElementById('wifiAccount').value;
        operator = document.getElementById('wifiProvider').value;

        if (!account) {
            alert('Please enter your account number');
            return;
        }
        if (!operator) {
            alert('Please select a provider');
            return;
        }
    } else {
        account = document.getElementById('tvAccount').value;
        operator = document.getElementById('tvProvider').value;

        if (!account) {
            alert('Please enter your subscriber ID');
            return;
        }
        if (!operator) {
            alert('Please select a provider');
            return;
        }
    }

    if (!selectedPlan) {
        alert('Please select a plan');
        return;
    }

    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }

    // Payment method specific validation (optional for backend, but good for UX)
    if (selectedPayment === 'upi') {
        const upiId = document.getElementById('upiId').value;
        const upiPin = document.getElementById('upiPin').value;
        if (!upiId || !upiId.includes('@') || !upiPin || (upiPin.length !== 4 && upiPin.length !== 6) || !/^\d+$/.test(upiPin)) {
            alert('Please enter valid UPI details.');
            return;
        }
    } else if (selectedPayment === 'card') {
        const cardInputs = document.querySelectorAll('#cardDetails input');
        let allFilled = true;
        cardInputs.forEach(input => {
            if (!input.value) allFilled = false;
        });
        if (!allFilled) {
            alert('Please fill all card details');
            return;
        }
    } else if (selectedPayment === 'netbanking') {
        const bank = document.getElementById('bankSelect').value;
        const accountNumber = document.getElementById('accountNumber').value;
        const password = document.getElementById('netbankingPassword').value;
        if (!bank || !accountNumber || accountNumber.length < 8 || !password || password.length < 6) {
            alert('Please fill all Net Banking details correctly.');
            return;
        }
    }

    // Prepare data for backend
    const rechargeData = {
        serviceType: currentService,
        accountNumber: account,
        operator: operator,
        planAmount: selectedPlan.price,
        paymentMethod: selectedPayment
    };

    try {
        const response = await fetch("http://localhost:5001/api/recharge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rechargeData)
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("transactionId").textContent = data.transaction.transaction_id;
            document.getElementById("transactionDateTime").textContent = new Date(data.transaction.created_at).toLocaleString();
            document.getElementById("successModal").classList.add("active");
        } else {
            alert("Recharge failed: " + (data.error || "Unknown error"));
        }
    } catch (error) {
        console.error(error);
        alert("Server not responding. Please try again later.");
    }
}
// **** END OF UPDATED FUNCTION ****

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    location.reload();
}
