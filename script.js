async function showResults() {

const id = document.getElementById("participantId").value.trim();
const resultsDiv = document.getElementById("results");

const response = await fetch("data.json");
const data = await response.json();

if(data[id]){

resultsDiv.style.display = "block";

resultsDiv.innerHTML = `
<h3>Hello ${data[id].name}</h3>
<p><strong>Summary:</strong> ${data[id].summary}</p>
<p><strong>Heart Rate:</strong> ${data[id].data.heart_rate}</p>
<p><strong>Blood Pressure:</strong> ${data[id].data.blood_pressure}</p>
<p><strong>Interpretation:</strong> ${data[id].interpretation}</p>
`;

}else{

resultsDiv.style.display = "block";
resultsDiv.innerHTML = "<p>ID not found.</p>";

}

}
