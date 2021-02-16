// Buisness Logic for User

function User(age) {
  this.age = age; 
}

User.prototype.determineAgeGroup = function () {
  if (this.age <= 13) {
    return "child";
  }else if (this.age <= 65) {
    return "adult";
  }
  else {
    return "senior";
  } 
};

let user = new User(80);

// 1) User = age
// 2) Ticket = movie, time, cost

