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

// Business Logic for Ticket

function Ticket(movie, time) {
  this.movie = movie;
  this.time = time;
  this.cost = 0;
}

Ticket.prototype.determineTime = function(time){
  if (this.time <= 12) {
    return "morning";
  } else if (this.time <= 17) {
    return "matinee";
  }
  else {
    return "evening";
  }
}

Ticket.prototype.determineCost = function() {
  const morning = 8
  const afternoon = 10
  const evening = 12 
  
  return this.cost 
}

let ticket = new Ticket("Batman", 3);

// 1) User = age
// 2) Ticket = movie, time, cost
// 3) Age cost: Child 1/2, Senior 1/4, Adult 1 
// 4) Time cost: Morning 8, Afternoon 10 , Evening 12    
