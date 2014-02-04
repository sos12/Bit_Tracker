Bit_Tracker
===========

This script will update the current Bitcoin price in USD from BTC-E onto a GoogleDocs Spreadsheet. 

Detailed Instructions for use:

1. Open a googleDocs Spreadsheet
2. Give your spreadsheet a name (name this whatever you like)
3. Click Tools > Script Editor
	*Google will likely open a new tab for you to code in.
	*If you see a popup, simply click "Close"
4. You will see a blank function on the screen. Go ahead and delete that
5. Paste in the code in the .gs file
6. Click "Save"
7. Name your project on the popup (name this whatever you like)
8. You'll see a button that says "Select Function". Click it, and select "first"
9. Click "Run" (the button looks like a "Play" button).
10. A popup will ask for authorization. Click "Continue"
11. A second popup will appear. Click "Accept"
12. Click the button that now says "first"
13. Select "refresh"
14. Click "Run"
15. 
	*If you check your spreadsheet, you'll see that the time, price, and labels for each have been loaded into your spreadsheet

***Any time you click the "Run" button, the price will be updated. If you would like the script to run automatically, you can click the "Triggers" button next to the "Run" button. Click the blue text to set up a trigger. Click the dropdown menu and select "refresh". Adjust the other dropdown menus to arrange when the information will refresh. If left by itself, the information will update whenever the spreadsheet is opened.
