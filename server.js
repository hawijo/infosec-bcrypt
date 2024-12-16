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
// For this challenge, you don't need any async logic here, so remove it.
//END_ASYNC


//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Hash:', hash);

const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Do passwords match?', result);
//END_SYNC


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
