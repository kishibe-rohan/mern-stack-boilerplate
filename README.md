# MERN-Stack-Boilerplate
_________
Basic folder structure and  barebones for a  MERN stack app

## Folder Structure
_________
The two main folders for the app are: **client** and **server**

The frontend files,assets and logic mainly concerned with **React** go into the 'client' directory.

The server-side logic dealing with setting up your **Express** server,connecting to **MongoDB** database and setting up your API take place in the 'server' directory
_________
### server folder 
_________
The server folder is further subdivided into:-

1. models => This is where you set up your DB schema. May contain files like UserModel.js , PostModel.js ,etc depending upon the scale and purpose of your application.
   
2. controllers => This is where the functions are written to modify the DB with the help of the Schema model created using *mongoose*
   
3. routes => The functions created in controller are assigned to their specific routes here. Usually contaisn a single index.js where you define your routes and their associated controllers.

Flow : *models ---> controllers ---> routes*

**index.js** => This is the entry point of the server.This is where you set up your *Express* server ,declare your routes imported from the routes subdirectory,handle CORS,make your server connect to your DB,etc. You may want to place your environment variables in a seperate .env file for privacy and security purposes.

_________
**Instructions** : 
_________
1) Clone the repo
2) Open your terminal and change directory to server
3) Run **npm install** to install the necessary packages specified in *package.json*
4) Make sure to replace the fields in .env file with their appropriate values
5) **npm run devStart** (to run the server in development mode with *nodemon*)

_________
### client folder 
_________
Further subdivided into:
 1. *public* => This is where you may want to place your assets liek logo and public images. It contains and **index.html** file with a div with id 'root' which is rendered from the src folder's **index.js**
   
 2. *src* => The 'src' folder has a 'components' subdirectory where you create the components of the Frontend of your app,namely Navbar,Main Body,Footer,etc. Each component may have its own folder with the files **component_name.js** and **component_name.css** which are then imported in the *App.js* and rendered by the *index.js* in the root div of *index.html* with the *ReactDOM.Render* method. The **api** folder in the src is where you may want to make API calls to your server to fetch the data from backend to be served on the frontend. 
   
   _________
**Instructions** : 
_________
1) Clone the repo
2) Open your terminal and change directory to client
3) Run **npm install** to install the necessary packages specified in *package.json*
4) **npm start** (to run the React App on localhost:3000)

_________
Upon successful execution:

![server](https://i.ibb.co/nbK03VG/Screenshot-135.png)

![client](https://i.ibb.co/gvFkmnb/Screenshot-136.png)
_________
