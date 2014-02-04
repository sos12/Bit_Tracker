 
// Specifies you'll be working on Tab 1 of your current spreadsheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tab1 = ss.getSheets()[0];
  
// Sets the cells for the rate, timestamp, and labels. You can of course move these if you like.
  var timeText = tab1.getRange("A1");
  var timeCell = tab1.getRange("A2");
  var lastCell = tab1.getRange("B1");
  var lastValue = tab1.getRange("B2");

// The price is drawn from BTC-E, and then parsed. The parsed data used is "last".
  var url = "https://btc-e.com/api/2/btc_usd/ticker";
  var urlReturned = UrlFetchApp.fetch(url);
  var json = urlReturned.getContentText();
  var parsedData = JSON.parse(json);
  var b = parsedData["ticker"]["last"]

// This function adds text to the spreadsheet  
function first() {    
    timeText.setValue("Timestamp");
    lastCell.setValue("Bitcoin / USD Rate");
}

// This function resets the timestamp and pulls the current value from the URL.
function refresh() {
  timeCell.setValue(new Date());
  lastValue.setFormula(b);
}

// You can set this to update as often as you like via the triggers settings. 
