// Full name: Bhargav Patel
// Student ID:100841562
// Date completed: 04-02-2023

console.log("JS is wired up");

function timeRedirect(e){
    let contactName = document.getElementById('inputName1').value;
    let contactNumber = document.getElementById('inputPhone').value;
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let shortMessage = document.getElementById('shortMessage').value;
    console.log("Name: "+ contactName + ", " +"Number: " + contactNumber + ", " +"Email: " + contactEmail + ", " +"ShortMessage: " + shortMessage);
    e.preventDefault();
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000)
}

let submitbtn = document.getElementById('submit-btn');

if (submitbtn)
{submitbtn.addEventListener('click',timeRedirect,false);
}