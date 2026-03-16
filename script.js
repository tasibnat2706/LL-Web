async function showResults() {

const id = document.getElementById("participantId").value.trim();
const resultsDiv = document.getElementById("results");

if (!id) {
resultsDiv.style.display = "block";
resultsDiv.innerHTML = "<p>Please enter an ID.</p>";
return;
}

try {

const response = await fetch("data.json");
const data = await response.json();

if (data[id]) {

resultsDiv.style.display = "block";

resultsDiv.innerHTML = `
<h3>Hello ${data[id].name}</h3>
<p><strong>Summary:</strong> ${data[id].summary}</p>
<p><strong>Heart Rate:</strong> ${data[id].data.heart_rate}</p>
<p><strong>Blood Pressure:</strong> ${data[id].data.blood_pressure}</p>
<p><strong>Interpretation:</strong> ${data[id].interpretation}</p>
`;

} else {

resultsDiv.style.display = "block";
resultsDiv.innerHTML = "<p>ID not found. Please check and try again.</p>";

}

} catch (error) {

resultsDiv.style.display = "block";
resultsDiv.innerHTML = "<p>Error loading data.</p>";
console.error(error);

}

}
