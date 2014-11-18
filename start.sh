#!/bin/bash
NODE_ENV=production MONGO_URI=mongodb://localhost/remember forever --minUptime 1000 --spinSleepTime 1000 app.js
