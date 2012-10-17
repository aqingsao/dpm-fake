# Why this project?
This is a fake DPM implementation, which receives http/https request and will response. It can be used in dev environment by simulating different testing cases.

# How to use it?
* Download nodejs in your dev machine, I use version 0.8.1.
* Checkout source code from github, for example to directory 'dpm-fake'
* go to directory 'dpm-fake', and run `npm install`
* run `node app.js`

Then fake dpm will listen on port 3000.

# Setting delay time

You can use option "-d" to specify delay in seconds before fake dpm reponses the requests, default value is 10 seconds.

Example: `node app.js -d=30` will deplay in 30 seconds before responses

# Setting response code

You can use option "-e" to specify whether fake dpm will throw an exception, or return a response with a specific status code, default value is 303(which will redirect to pay-receipt page).

Example: `node app.js -e` will throw an exception and server will crash

Example: `node app.js -e 500` will response with status 500

# Setting https mode
Https mode is also supported with option "-s", but please generate certificate files before you run it:

`openssl genrsa -out privatekey.pem 1024   `

`openssl req -new -key privatekey.pem -out certrequest.csr  `

`openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem  `

Then you can run with `node app.js -s`

# Setting port
You can use option "-p" to specify port, the default one is 8088.

Example: `node app.js -p 3000` will listen on port 3000.

# TO DO
You are welcome to contribute and build more function on this project
