document.addEventListener('DOMContentLoaded', () => {
    const totalBillInput = document.getElementById('totalBill');
    const numberOfPeopleInput = document.getElementById('numberOfPeople');
    const tipInput = document.getElementById('tip');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const totalBill = parseFloat(totalBillInput.value);
        const numberOfPeople = parseInt(numberOfPeopleInput.value);
        const tipPercentage = parseFloat(tipInput.value) || 0;

        if (isNaN(totalBill) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
            resultDiv.textContent = "Please enter valid numbers for bill and people.";
            resultDiv.style.color = "red";
            return;
        }

        const tipAmount = totalBill * (tipPercentage / 100);
        const billWithTip = totalBill + tipAmount;
        const amountPerPerson = billWithTip / numberOfPeople;

        resultDiv.textContent = `Amount per person: ₹${amountPerPerson.toFixed(2)}`; // Changed currency symbol
        resultDiv.style.color = "green";
    });
});