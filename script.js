function goToResults(){

const id = document.getElementById("participantId").value.trim();

if(!id){
alert("Please enter your ID");
return;
}

window.location.href = "results.html?id=" + id;

}
