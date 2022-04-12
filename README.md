# Palabra_2: The Great Refactor
Palabra is a word-of-the-day app. Behind its simplistic exterior, we wanted something dynamic, functional, and scalable. Palabra can be used to learn a new word each day, as well as its definition and synonyms. 

## User Story
AS A USER, I want an application that displays a word of the day each day so that I can increase my vocabulary. I want to be able to register for a profile and login so that I can write notes about the words I learn each day. I want those past words and notes to be displayed on the page.

## Uses
The application can be used to expand ones vocabulary. Users will be able to register for a profile so that they can keep track of their learning. You can learn a new word each day and write a note for each day. The words will be saved to a relational database so that you can come back each day and see the words from before.

## Installation
- npm i
- npm i express
- npm i mysql2
- npm i sequelize 
- npm i bcrypt
- npm i handlebars
- npm i express-sessios
- Clone repo
- Replace env vars in env.express with your env vars and rename file to .env

## Deployed app
The deployed application can be found here: https://palabra-2.herokuapp.com/

## Collaborators
Jacob Lewis
Dylan Marcy
Emma Reimer

## References
Two API's were used:
1. Miriam Webster dictionary API
2. http://random-word-api.herokuapp.com/home

Libraries/Frameworks/Modules include:
1. Tailwind
2. Momentjs
3. Axios
4. Express
5. Nodejs
6. Bootstrap
7. MySQL
8. Sequelize
9. DotENV
10. Bcrypt

Lanuges used include:
1. CSS
2. HTML
3. Javascript

## Screenshots
Here are pictures that show the functionality of the application:
![Palabra on page Load](./assets/images/onLoad.PNG)
![Palabra with similar words](./assets/images/similar.PNG)
![Palabra with definition](./assets/images/definition.PNG)
![Mobile Palabra with similar words](./assets/images/mobileSimilar.jpg)
![Mobile Palabra with definition](./assets/images/mobileDefinition.jpg)