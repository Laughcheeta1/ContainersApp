# Participants
- Samuel Corrales
- Sebastian Ruiz
- Santiago Yepes

<h1><a href="https://youtu.be/S-7sSQHcE1g">Video Demo</a></h1>

# About the project
This project is a web app intended to manage containers for a Colombian company, so it is completely on spanish.
Basically you can add cointainers, that then are leased and sold (and after the lease ends, they are entered back into the shop), the actions are registered as commodatums. Apart from this you can add clients and items that the container should have (although this two last caabilities are barebones and appart from just adding the items (and changing stock number) and adding clients, you can't do much more with them.

# Inner workings of the backend
The back end of the project is a monolyth arquitecture (we didn't do it a microservice arquitechture because that would be overkill for the necessity at hand), more specifically is a REST API, it was built using Node.js.
The files are separated into the folliwing folders:
- controllers: This is the controller layer of the application, that means that in this folder there is all the functions that are executed when an endpoint is called, although this endpoints are defined in other files contained in another folder.
- libs: In here there lies only one file, that is the jwt file, the only function in this file is `createAccesToken()` that, as it's name implies, creates an access token.
- middlewares: Here lies the middlewares, here the schema and jwt validations are defined.
- models: Contains all the mongoose model for the MongoDb database.
- routes: Here is the definition of the endpoints.
- rest of files: the rest of the files that are not on folders are the following:
  * app.js: in here the app is defined and the order of the middlewares that are going to be used in the application.
  * config.js: in here the key for the server passwords is generated.
  * db.js: in here the connection to the database is stablished.
  * index.js: just runs the application on the specified port.


# Things that could be done better
Since we made this project a long time ago, we are not going to make any more corrections honestly, we are happy with how it turned out, but still after more time learning and porgressing, there are some things that we think can be done better.

* Access Token: we just make a one time access token, when in reality the access token should constantly be replaced by using a refresh token instead, also the access token can be better used.
* Making a database schema: instead of just defining each thing we need insiede the mongoose schema, it is better to design a separate database, optimize it, and then use that database implementation (either by mongoose or MongoDb module directly, I now prefer the ladder one).

This are the most important things that can be done better that come to my mind (there's nothing from the front end because I (Santiago) principally worked in backend, and I'm just adding this README for present this proyect also as the CS50 final proyect).
