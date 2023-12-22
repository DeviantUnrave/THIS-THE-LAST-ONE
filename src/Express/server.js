const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//Use require to directly reference authRoutes.js in the 'Routes' folder
const authRoutes = require('./Routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//Use authRoutes for handling authentication
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



/*
DOESN'T WORK (idk y ive been trying to debug this for 2hrs but it still doesnt fkin work)
Commands inputted: cd NAV-main
                   node Express/server.js
This is the error that shows:
node:internal/modules/cjs/loader:1051
  throw err;
  ^

Error: Cannot find module 'D:\VS_Code_Files\Uni Files\FINAL_PROJ\NAV_FINAL\NAV-main\Express\server.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)
    at Module._load (node:internal/modules/cjs/loader:901:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

It's just for the login pjd ;-;

DISCLAIMER: Most of these are GPT
*/