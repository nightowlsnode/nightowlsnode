
[![Stories in Ready](https://badge.waffle.io/nightowlsnode/nightowlsnode.png?label=ready&title=Ready)](https://waffle.io/nightowlsnode/nightowlsnode?utm_source=badge)
# nightowlsnode

## Required Files

##Private folder on root directory containing 

##apiKeys.js with variables named: 
###sid(from twilio),
###authorizationCode(twilio),
###twilioNumber,
###GOOGLE_API_KEY (google maps geo coding api)

## dbconfig.js containig variables named:
###databaseOptions = { dialect: 'postgres', logging: false, pool: {max: 5,min: 0,idle: 10000,}}
###databaseUrl = given by postgreSQL host


## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Tasks](#tasks)
3. [Team](#team)
4. [Contributing](#contributing)

## Usage

> Some usage instructions
Run npm start

## Tech Stack 

- Node 0.0x
- Sequelize
- React
- Express
- Bootstrap

### Installing Dependencies

From within the root directory:

npm install


### Roadmap

All server logic is contained in index.js and the Server folder. 

The core app functionality is in App.js and the app folder.  

Chat component lives in chatbox.jsx



## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.