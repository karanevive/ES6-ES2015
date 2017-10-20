
"use strict"

class User{
  constructor(username, email, password){
      this.username = username;
      this.email = email;
      this.password = password;
  }

  static countUsers(){
    console.log('There are 50 users');
  }

  register(){
    console.log(this.username+' is now registered');
  }
}

let karan = new User('karan', 'karan.arora@evivehealth.com', '12345');
karan.register();
User.countUsers();

class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username+' is subscribed to the '+this.package+' package');
  }
}

let kaku = new Member('karan', 'karan.arora@evivehealth.com', '123', 'Standard');

//kaku.getPackage();
kaku.register();
