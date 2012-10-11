# Why this project?
This is a fake DPM implementation

# How to use it?
* Download nodejs in your dev machine, I use version 0.8.1.
* Checkout source code from github, for example to directory 'dpm-fake'
* go to directory 'dpm-fake', and run `npm install`
* run `node app.js`

Then fake dpm will listen on port 3000.

# More options
There are 2 optional arguments when you run `node app.js`
1. -d, used to specify delay in seconds before this fake dpm to reponse the requests, default value is 10.
Example: `node app.js -d=30`
2. -e, used to specify whether this fake dpm will throw an exception for requests, default value is false.
Example: `node app.js -e`

# TO DO
You are welcome to contribute and build more function on this project
