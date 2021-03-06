# Movie Tickets

#### Movie Ticket project for Epicodus, 02.15.2021

#### By **Marni Sucher Sofia Acosta**

## Technologies Used

* HTML/CSS
* Bootstrap
* JavaScript
* jQuery

## Description

This webpage will allow the user's to choose a movie, and take their information to assign a price of a movie, depending on the user's age and the time the movie begins. 

## Test
Describe: User(age)
Test 1: "It will take a user's age and determine the age group by calling the determineAgeGroup prototype function."
Expect(user.determineAgeGroup(12).toEqual("child"));

Test 2: "It will take a user's age and determine the age group by calling the determineAgeGroup prototype function."
Expect(user.determineAgeGroup(35).toEqual("adult"));

Test 3: "It will take a user's age and determine the age group by calling the determineAgeGroup prototype function."
Expect(user.determineAgeGroup(80).toEqual("senior"));

Test 4: "It will determine that the movie is a morning film by creating an object for Ticket with a time of 3:00."
Expect(ticket.determineTime().toEqual("morning"));

Test 5: "It will determine that the movie is a morning film by creating an object for Ticket with a time of 13:00."
Expect(ticket.determineTime().toEqual("matinee"));

Test 6: "It will determine that the movie is a morning film by creating an object for Ticket with a time of 19:00."
Expect(ticket.determineTime().toEqual("evening"));

## Setup/Installation Requirements

* Clone repository: https://github.com/marnionrails/movie-tickets
* Open movie-tickets folder
* Open index.html in your favorite browser.

## Known Bugs

* None at this time

## License

[MIT](https://choosealicense.com/licenses/mit) 

## Contact Information

Marni Sucher <suchermarni@gmail.com> or Sofia Acosta <sofiaacostarascon@gmail.com>
