const express = require('express');
const osc = require('node-osc');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));


const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Set up WebSocket server
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Receive OSC messages and send to WebSocket clients
  const oscServer = new osc.Server(3333, '0.0.0.0');

  oscServer.on('message', (msg) => {
    console.log('Received OSC message:', msg);

    // Send the OSC message to all connected WebSocket clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  });

  // Handle WebSocket messages
  ws.on('message', (message) => {
    console.log('Received WebSocket message:', message);
    // Handle WebSocket messages as needed
  });

  // Handle WebSocket disconnection
  ws.on('close', () => {
    console.log('WebSocket connection closed');
    oscServer.close();
  });
});



//----------------------------------------------


// Set up WebSocket server
wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Handle WebSocket messages
  ws.on('message', (message) => {
    console.log('Received WebSocket message:', message);

    // Forward the OSC message to the OSC server
    const oscMessage = JSON.parse(message);
    oscClient.send(oscMessage.address, ...oscMessage.args);
    console.log('Sent OSC message:', oscMessage);
  });

  // Handle WebSocket disconnection
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// Set up OSC UDP port for sending OSC messages
const oscClient = new osc.Client('127.0.0.1', 7777); // Replace with the correct IP address and port for Max/MSP

// Handle POST request for sending OSC messages from the browser
app.use(bodyParser.json());
app.post('/send-osc', (req, res) => {
  const { address, args } = req.body;

  // Send the OSC message to Max/MSP
  oscClient.send(address, ...args);

  console.log('Sent OSC message to Max/MSP:', address, args);

  res.sendStatus(200);
});