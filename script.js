async function showResults() {
    const id = document.getElementById("participantId").value.trim();
    const resultsDiv = document.getElementById("results");

    if (!id) {
        resultsDiv.innerHTML = "<p>Please enter an ID.</p>";
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();

        if(data[id]) {
            resultsDiv.innerHTML = `
                <h3>Hello ${data[id].name}</h3>
                <p><strong>Summary:</strong> ${data[id].summary}</p>
                <p><strong>Your Data:</strong> Heart Rate: ${data[id].data.heart_rate}, Blood Pressure: ${data[id].data.blood_pressure}</p>
                <p><strong>Interpretation:</strong> ${data[id].interpretation}</p>
            `;
        } else {
            resultsDiv.innerHTML = "<p>ID not found. Please check and try again.</p>";
        }
    } catch (err) {
        resultsDiv.innerHTML = "<p>Error loading data. Try again later.</p>";
        console.error(err);
    }
}
