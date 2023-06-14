

        // Open a WebSocket connection
        const socket = new WebSocket('ws://localhost:3000');

        // RECEIVE WebSocket messages
        socket.onmessage = (event) => {
            const oscMessage = JSON.parse(event.data);
            console.log('Received OSC message:', oscMessage);

            // Handle OSC messages as needed

            checkForOSCMessages(oscMessage);


        };

        // SEND a WebSocket message
        function sendWebSocketMessage(sendMyMesg) {
            const message = 'Hello, WebSocket!';
            socket.send(message);
            console.log('Sent WebSocket message:', sendMyMesg);
        }

        //---I ADDED THIS TO MERGE

        // Handle WebSocket connection open event
        socket.onopen = () => {
            console.log('WebSocket connection established');

            // Example usage: sending an OSC message
            const oscAddress = '/toggle1';
            const oscArgs = [0];
            sendOSCMessage(oscAddress, oscArgs);
        };

        // Send OSC message to server
        function sendOSCMessage(address, args) {
            if (socket.readyState === WebSocket.OPEN) {
                const oscMessage = {
                    address: address,
                    args: args
                };

            socket.send(JSON.stringify(oscMessage));
            console.log('Sent OSC message:', oscMessage);
                } else {
                console.log('WebSocket connection not open');
                }
        }