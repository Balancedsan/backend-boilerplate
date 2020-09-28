const express = require('express');
const App = express();
const cors = require("cors");




App.use(express.json());
App.use(cors());



module.exports = app;
