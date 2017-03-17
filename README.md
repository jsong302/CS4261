## Synopsis

Front end of the mobile application we created for the class CS 4261 Mobile Apps and Services.
The application, TexChange, addresses the key problem relating to obtaining textbooks by efficiently aiding the process of exchanging textbooks among Georgia Tech students. 
The TexChange application acts as the intermediary by matching the buyer and the sellers together based on the class and professor.

## Implementation

Frontend

For the frontend, the application is currently running as an iOS and a web application, with full communication across platforms. 
Our application used an open source framework called Ionic 2, which is based on Angular 2, a
Javascript framework. Using Angular services, we are able to use http calls to our API to retrieve
information from our database. Then we pass it on to the view page and populate it through html
and css.

The main functionality that is under construction is of our backend relies on the GT Schedule API which we get
access to through the GT Login API. Users log in through the GT Login page, where the
application acquires GT usernames and passwords. With this information, the backend can
access GT Schedule API and query for users’ course information for the current semester. Users
can then search textbook based on the classes they are taking, instead of manually inputting
textbook information, which greatly automates the process. It’s worth mentioning that the GT
Login page is still under construction for the time being, because of issues with connecting our
application to the authentication system. As a background, websites made under the ‘gatech.edu’
domain that require user login use a service called the Central Authentication System (CAS).
Unfortunately, under the time constraints we were given to work on Texchange, we could not
gain access to CAS in order to redirect properly to the Schedule API. Therefore, all user login
information is hardcoded into the system for testing purposes. The entirety of the backend is
done in Node.js within a Heroku infrastructure. Most of the backend APIs communicate with the
database to pull back information about textbooks and listings, as well as storing information
pertinent to the application.

The application implements a PostgreSQL database to store important information about
listings, textbooks, and users.


## Application

View the application [here](http://texchange-frontend.herokuapp.com/)

