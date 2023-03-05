// Full name: Bhargav Patel
// Student ID:100841562
// Date completed: 05-02-2023

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

// All registration form related data

// creating user class 
class User{
    /**
     * User
     * @param {string} userFirstName
     * @param {string} userLastName
     * @param {string} userEmailAddress
     * @param {string} userPassword
     */
    constructor(userFirstName,userLastName,userEmailAddress,userPassword){
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmailAddress = userEmailAddress;
        this.userPassword = userPassword;
    }

    /**
     * @property {function} displayUser it prints the information of the users such as first name, last name, email, password
     * @returns {string}
     */
    displayUser() {
        return `Name: ${this.userFirstName}${this.userLastName},
                emailAddress: ${this.userEmailAddress},
                password: ${this.userPassword}`
    }
}

// All validation related to registration form

/**
 * validating user's first name in the registration form
 * @param {string} firstName 
 * @returns html element if there are any errors
 */
function validateFirstName(firstName) {
    if(firstName.length < 2) {
        return "<p>Please enter at least 2 letters to save first name</p>"
    }
    else{
        return "<p></p>";
    }
}

/**
 * validating user's last name in the registration form
 * @param {string} lastName 
 * @returns html element if there are any errors
 */
function validateLastName(lastName) {
    if(lastName.length < 2) {
        return "<p>Please enter at least 2 letters to save last name</p>"
    }
    else{
        return "<p></p>";
    }
}

/**
 * validating user's emailaddress in the registration form 
 * @param {string} email 
 * @returns html element if there are any errors
 */
function validateEmail(email) {
    if(emailid.test(email).val() || email.length > 8){
        return "<p></p>"
    }
    else{
        return "<p>Please enter the email address correctly and characters and email is too short</p>";
    }
}

/**
 * validating two entered passwords
 * @param {string} password1
 * @param {string} password2 
 * @returns html element if there are any errors
 */
function validatePassword(password1,password2) {

    if(password1 == password2 || password1.length > 6){
        return "<p></p>"
    }
    else{
        return "<p>Passwords are not matching and password length is too short</p>";
    }
}

if ($("#regBtnSubmit")){
    $("#regBtnSubmit").click(function (e) {
        e.preventDefault();
        const new_user = new User(
            // getting user's first name
            $("#inputFirstName").val(),
            // getting user's last name
            $("#inputLastName").val(),
            // getting user's emailaddress
            $("#inputEmailAddress").val(),
            // getting user's password
            $("#inputPassword").val()
        )

        console.log(`User details: ${new_user.displayUser()}`)
    
    $("#firstname-group").children(".ErrorMessage").html(validateFirstName(new_user.userFirstName));
    $("#lastname-group").children(".ErrorMessage").html(validateLastName(new_user.userLastName));
    // $("#email-group").children(".ErrorMessage").html(validateEmail(new_user.userEmailAddress));
    $("#password-group").children(".ErrorMessage").html(validatePassword(new_user.userPassword));
    $("#conformpass-group").children(".ErrorMessage").html(validatePassword(new_user.userPassword));
    });
};