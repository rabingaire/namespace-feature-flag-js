#!/usr/bin/env node

'use strict';

const axios = require('axios');

function feature_flag(name) {
  axios.get(`http://localhost:3000/feature_flag/${name}`)
  .then(function (response) {
    return response.value;
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = feature_flag;