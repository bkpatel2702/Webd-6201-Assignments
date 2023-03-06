// Full name: Bhargav Patel
// Student ID:100841562
// Date completed: 05-02-2023
// Reference: - Took help from the provided videos on feb 10 and feb 9 and took help from some code of ICE 4

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
    // Constructing the class attributes 
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

    // Display the user details
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

// validating the user's firstname with the given validation details
function validateFirstName(firstName) {

    // if the user enters first name with less than 2 characters than show the error message else show nothing and save the details
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

// validating user's last name
function validateLastName(lastName) {
    // if user enters the name less than 2 characters than show the error message, else show nothing and save the details
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

// validate email address
function validateEmail(email) {
    // if the email address is less than 8 characters or not following the format then show error message else save the details
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

// validate password details
function validatePassword(password1,password2) {
    // if the password 1 and password 2 matches and the length is greater than 6 then save the details otherwise show error message
    if(password1 == password2 || password1.length > 6){
        return "<p></p>"
    }
    else{
        return "<p>Passwords are not matching and password length is too short</p>";
    }
}

// getting submit button and setting properties
if ($("#regBtnSubmit")){
    // preventing to do login if there are no information 
    $("#regBtnSubmit").click(function (e) {
        e.preventDefault();
        // creating variable that will get the user class attributes to save the data
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
        
        // printing the user details to the console
        console.log(`User details: ${new_user.displayUser()}`)
    
    // showing the error messages into the fields that created for the register form
    $("#firstname-group").children(".ErrorMessage").html(validateFirstName(new_user.userFirstName));
    $("#lastname-group").children(".ErrorMessage").html(validateLastName(new_user.userLastName));
    // $("#email-group").children(".ErrorMessage").html(validateEmail(new_user.userEmailAddress));
    $("#password-group").children(".ErrorMessage").html(validatePassword(new_user.userPassword));
    $("#conformpass-group").children(".ErrorMessage").html(validatePassword(new_user.userPassword));
    });
};