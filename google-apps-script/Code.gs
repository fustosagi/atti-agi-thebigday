/**
 * Google Apps Script — RSVP handler
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 *
 * 2. In the first row (header), add these columns:
 *      A: Timestamp | B: Name | C: Attending | D: Guests | E: Dietary | F: Note
 *
 * 3. Go to Extensions → Apps Script.
 *
 * 4. Delete any existing code and paste this entire file.
 *
 * 5. Click Deploy → New deployment.
 *      - Type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *      - Click Deploy
 *
 * 6. Authorize the script when prompted (it needs permission to write to your sheet).
 *
 * 7. Copy the Web app URL (looks like https://script.google.com/macros/s/AKfy.../exec).
 *
 * 8. Paste that URL into src/sections/RSVP.tsx → APPS_SCRIPT_URL constant.
 *
 * That's it! Every RSVP submission will appear as a new row in your spreadsheet.
 */

function doPost(e) {
  try {
    // Form submissions send data as e.parameter (URL-encoded key-value pairs)
    var data = e.parameter;

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name       || '',
      data.attending   || '',
      data.guests      || '',
      data.dietary     || '',
      data.note        || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
