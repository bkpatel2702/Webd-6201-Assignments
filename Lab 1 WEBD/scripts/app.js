// Full name: Bhargav Patel
// Student ID:100841562
// Date completed: 04-02-2023

// Setting the time function that will help page to stay on the same for 3 second 
function timeRedirect(e){
    // creating variable that will get the details from the contact form.
    let contactName = document.getElementById('inputName1').value;
    let contactNumber = document.getElementById('inputPhone').value;
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let shortMessage = document.getElementById('shortMessage').value;
    
    // Shows the details grab from the contact us page.
    console.log("Name: "+ contactName + ", " +"Number: " + contactNumber + ", " +"Email: " + contactEmail + ", " +"ShortMessage: " + shortMessage);
    
    // prevents the events that can stop the form to pass.
    e.preventDefault();
    // setting timer for 3 second for the page and after that, it will re direct to the home page.
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000)
}

// getting submit button
let submitbtn = document.getElementById('submit-btn');

// wiring up the function to the submit button.
if (submitbtn)
{submitbtn.addEventListener('click',timeRedirect,false);
}