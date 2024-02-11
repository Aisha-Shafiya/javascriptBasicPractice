class user {
    constructor(email, passowrd){
        this.email = email;
        this.passowrd = passowrd
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
    get passowrd(){
        return `${this._password.toUpperCase()}`
    }
    set passowrd(value){
        this._password = value
    }
}

// To encrypt the pw we use getter setter
const aisha = new user('Aisha@gmail.com',"1234aaaa");
console.log(aisha.email);
console.log(aisha.passowrd);