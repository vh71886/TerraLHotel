# Terra l'Hotel
Check out the live app [here.](https://terralhotel.herokuapp.com/) \
For design documentation, see wiki [here.](https://github.com/vh71886/TerraLHotel/wiki)

## Introduction
[Terra l'Hotel](https://terralhotel.herokuapp.com/) is a full-stack clone of the [Tablet Hotels](http://www.tablethotels.com) website. It is created for educational purposes only. Please do not enter any sensitive data while exploring Terra l'Hotel.

### Technologies Used
* Frontend: `React and Redux`
    - `react-redux`
    - `redux-thunk`
    - `react hooks`
* Backend: `Ruby on Rails`
    - `bcrypt` - user authentication`
* Database: `PostgreSQL`
* Languages
    - `Javascript`
    - `Ruby`
    - `HTML and CSS`
* Bundlers and Compilers
    - `webpack` - module bundler
    - `babel` - JavaScript ES6 compliler
* Additional APIs:
    - `Google Maps API`
* Hosting: Heroku

## Functionality and Features
There are currently 3 of 6 completed features for Terra l'Hotel:
* `User` authenticaion
* `Hotel` listing and details
* `Reservation` creation, lists, editing and cancellation

Key features for the completed project, including 2 full `CRUD` cycles: 
* Users:
    - User authentication - register, signin, logout
    - Ability to:
        - `View` hotels and hotel details
        - `Create`, `Read`, `Update` and `Destroy` reservations
        - `Create`, `Read`, `Update` and `Destroy` reviews
        - `Favorite` hotels
* Hotels:
    - `Searchable` by hotel name, city, state, or country
    - Listings can be further filtered
    - `Show` hotel details
        - Basic information: name, location, description
        - Accomadation informtion: amentities, total number of rooms at the property, room occupancy and size
        - Media: hotel and room images, location on Google Maps
* Reservations:
    - Reservation dates are `selectable` in the hotel details page to book a hotel room
    - Reservations can be edited and cancelled from the reservation listing page
    - To create a reservation, a user must be logged in
    - User is redirected to reservation listings after booking
    - Hotel information for booking is dervived from the hotel details page, not the user input
* Reviews:
    - Reviews for a hotel are shown on the hotel's details page, from all users
    - Reviews for a hotel can be written from the reservation listing page
    - Reviews can be edited and deleted from the user's reviews listing page
    - To create a reservation, a user must be logged in and the dates of the stay must be before the current date

More information for each feature can be found below.

### Users
Users are able to register for an account, login, and logout as needed on the website. The user authentication on the backend uses Ruby on Rails with BCrypt to secure password information. 

### Hotels
Users are able to search, view listings and details. 

### Reservations


### Reviews
In-progress

### Favorites
TBD

### Search
TBD