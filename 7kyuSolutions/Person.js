Object.defineProperty(Person.prototype, 'name', {
get: function () {
return `${this.firstName} ${this.lastName}`;
},

set: function (name) {
let splited = name.split(' ');
this.firstName = splited[0];
this.lastName = splited[1];
return this.firstName + this.lastName;
},
}); 
