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
 Ticket.prototype.determineTime = function(){
  if (this.time <= 12) {
    this.time = "morning";
  } else if (this.time <= 17) {
    this.time = "matinee";
  }
  else {
    this.time = "evening";
  }
} 

//Line 47: need to make that function work with any object. determineTime() needs to be called before 46 to update time.

Ticket.prototype.determineCost = function() {
  const morning = 8;
  const matinee = 10;
  const evening = 12;
  const senior = .25;
  const child = .5;
  const officialTime = this.time;
  const ageGroup = user.determineAgeGroup();
  if(officialTime === "morning" && ageGroup === "senior") {
      this.cost = morning * senior;
  } else if (officialTime === "matinee" && ageGroup === "senior") {
      this.cost = matinee * senior;
  } else if (officialTime === "evening" && ageGroup === "senior") {
      this.cost = evening * senior;
  } else if(officialTime === "morning" && ageGroup === "child") {
      this.cost = morning * child;
  } else if(officialTime === "matinee" && ageGroup === "child") {
      this.cost = matinee * child;
  }  else if(officialTime === "evening" && ageGroup === "child") {
      this.cost = evening * child;
  } else if(officalTime === "morning" && ageGroup === "adult") {
      this.cost = morning;
  } else if(officialTime === "matinee" && ageGroup === "adult") {
      this.cost = matinee;
  } else {
      this.cost = evening;
  } 
  return this.cost 
}

let ticket = new Ticket("Batman", 3);

// 1) User = age
// 2) Ticket = movie, time, cost
// 3) Age cost: Child 1/2, Senior 1/4, Adult 1 
// 4) Time cost: Morning 8, Afternoon 10 , Evening 12    
