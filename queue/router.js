const Arena = require('bull-arena');

const express = require('express');
const router = express.Router();

const arena = Arena({
    queues: [
        {
            // Name of the bull queue, this name must match up exactly with what you've defined in bull.
            name: "inspect task",

            // Hostname or queue prefix, you can put whatever you want.
            hostId: "bull",

            // Redis auth.
            redis: {
                port: 6379,
                host: '10.0.0.102'
            }
        },
        {
            // Name of the bull queue, this name must match up exactly with what you've defined in bull.
            name: "nlp task",

            // Hostname or queue prefix, you can put whatever you want.
            hostId: "bull",

            // Redis auth.
            redis: {
                port: 6379,
                host: '10.0.0.102'
            }
        }
    ]
});
router.use('/', arena);