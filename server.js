'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
const bcrypt = require('bcrypt'); 

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)

console.log(hash);
  
let compare =   bcrypt.compareSync(myPlaintextPassword, hash)
console.log('Do passwords match?', compare);

//END_ASYNC


//START_SYNC

// Typically, you would put bcrypt.hashSync() or bcrypt.compareSync() here if asked.
// No changes required here for the async challenge. 

//END_SYNC


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
