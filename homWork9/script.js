class Creator{
    constructor(fullName, chanelName){
        this.fullName = fullName;
        this.chanelName = chanelName;
        this.subs = [];
        this.newVideoNote = [];
    }
    setSubs(sub){
        this.subs.push(sub);
    }
    addNotification(note){
        this.newVideoNote.push(note);
        this.subs.forEach(user => user.update(note))
    }
};

class Users{
    constructor(fullName,age,){
        this.fullName = fullName;
        this.age = age;
    }
    update(note){
        if(shimsChanel.chanelName == 'Lern javaScript'){
            console.log(`hi! ${this.fullName}, ${note} was jost adedd in the chanel ${shimsChanel.chanelName}`);
        }
        if(israelsChanel.chanelName == 'Lern PHP'){
            console.log(`hi! ${this.fullName}, ${note} was jost adedd in the chanel ${israelsChanel.chanelName}`);
        }
        if(chaimsChanel.chanelName =='Lern CSS' ){
            console.log(`hi! ${this.fullName}, ${note} was jost adedd in the chanel ${chaimsChanel.chanelName}`);
        }
    }
};

// class Singelton{
//     constructor(){
//         if(!Singelton.instans){
//             Singelton.instans = new Users();
//         }
//     }
//     getSingelton(){
//         return Singelton.instans;
//     }
// };





const shimsChanel = new Creator('shimi','Lern javaScript');
const israelsChanel = new Creator('israel','Lern PHP');
const chaimsChanel = new Creator('chaim','Lern CSS');


const user1 = new Users('moshe',24);
const user2 = new Users('yosy',45);
const user3 = new Users('neta',18);
shimsChanel.setSubs(user1);
israelsChanel.setSubs(user2);
chaimsChanel.setSubs(user3);
let newVideo1 = `my new video javascript 4 beginers`;
let newVideo2 = `my new video PHP 4 beginers`;
let newVideo3 = `my new video CSS 4 beginers`;
shimsChanel.addNotification(newVideo1);
israelsChanel.addNotification(newVideo2);
chaimsChanel.addNotification(newVideo3);