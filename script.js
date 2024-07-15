document.getElementById('bookButton').addEventListener('click', bookRide);

function bookRide() {
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropoffLocation = document.getElementById('dropoffLocation').value;

    if (pickupLocation === "" || dropoffLocation === "") {
        alert("Please enter both locations.");
        return;
    }

    const result = document.getElementById('result');
    const estimatedCost = (Math.random() * 20 + 10).toFixed(2); // Simulated cost between $10 and $30
    const estimatedTime = (Math.random() * 30 + 10).toFixed(0); // Simulated time between 10 and 40 minutes

    result.innerHTML = `
        <p><strong>Pick-up Location:</strong> ${pickupLocation}</p>
        <p><strong>Drop-off Location:</strong> ${dropoffLocation}</p>
        <p><strong>Estimated Cost:</strong> $${estimatedCost}</p>
        <p><strong>Estimated Time:</strong> ${estimatedTime} minutes</p>
        <button id="confirmButton">Confirm Ride</button>
    `;

    document.getElementById('confirmButton').addEventListener('click', confirmRide);
}

function confirmRide() {
    const result = document.getElementById('result');
    result.innerHTML = `<p>Ride confirmed! Your driver will arrive shortly.</p>`;
}
