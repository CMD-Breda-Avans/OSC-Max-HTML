# OSC-Max-HTML
Send and receive OSC messages between MaxMSP and HTML

## Installing Node.js

### Windows:
1. Visit the official Node.js website: https://nodejs.org/
2. On the homepage, click on the "Downloads" button.
3. The website should automatically detect your operating system and provide the recommended installer.
4. Click on the Windows Installer button to download the Node.js installer for Windows.
5. Once the installer is downloaded, run it.
6. Follow the installer prompts, accepting the default settings.
7. After the installation completes, open Visual Studio Code.
8. Open a new integrated terminal in Visual Studio Code by clicking on "View" in the top menu and selecting "Terminal" or by using the shortcut Ctrl+ backtick (`).
9. To verify that Node.js is installed correctly, type the following command in the integrated terminal:

        node -v

You should see the version number of Node.js displayed in the terminal.

### macOS:
1. Visit the official Node.js website: https://nodejs.org/
2. On the homepage, click on the "Downloads" button.
3. The website should automatically detect your operating system and provide the recommended installer.
4. Click on the macOS Installer button to download the Node.js installer for macOS.
5. Once the installer is downloaded, open it and follow the installer prompts, accepting the default settings.
6. After the installation completes, open Visual Studio Code.
7. Open a new integrated terminal in Visual Studio Code by clicking on "View" in the top menu and selecting "Terminal" or by using the shortcut Ctrl+ backtick (`).
8. To verify that Node.js is installed correctly, type the following command in the integrated terminal:

        node -v
        
    You should see the version number of Node.js displayed in the terminal.

## Installing Libraries (Express, node-osc, ws, and body-parser)

### Windows and macOS:
1. Using Visual Studio Code open the folder **OSCtoMaxandHTML** .
2. Open a new terminal by clicking on "View" in the top menu and selecting "Terminal" or by using the shortcut Ctrl+ backtick (`).
3. To install the necessary NodeJS libraries **Express**, **Node-OSC**, **WS** and **Body Parcer**. You need to type the following command in the terminal:

        npm install express node-osc ws body-parser
        
After executing this commands, Node.js will download and install the required libraries.

By following these instructions, Windows and macOS users who are using Visual Studio Code will be able to install Node.js and the necessary libraries (Express, node-osc, ws, and body-parser) and use Visual Studio Code's integrated terminal for executing commands.





# Getting Started

In your Terminal type the following to start the server:

                                node server.js
                                
It should respond with : **Server listening on port 3000** . If there is a diferent response and you get a prompt then you need to follorw the instructions again to find a solution.

Once the server is running go to your browser and type:

                                localhost:3000

You should see the initial index.html page with many methods for sending OSC messages from a browser and/or receiving OSC messages from MaxMSP.  You will find the Max patch in the Max folder.
