// user class

export class User{
    constructor(userFirstName,userLastName,userEmailAddress,userPassword){
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmailAddress = userEmailAddress;
        this.userPassword = userPassword;
    }

    displayUser(){
        return `Name: ${this.userFirstName}${this.userLastName},
                emailAddress: ${this.userEmailAddress},
                password: ${this.userPassword}`
    }
}