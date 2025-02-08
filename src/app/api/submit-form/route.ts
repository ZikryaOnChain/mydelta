import { google } from 'googleapis';

// Debug function to safely log credentials
const debugAuth = () => {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  
  console.log('Auth Debug:', {
    hasEmail: !!email,
    emailLength: email?.length,
    hasKey: !!key,
    keyLength: key?.length,
    hasSheetId: !!sheetId,
    sheetIdLength: sheetId?.length,
  });
};

export async function POST(request: Request) {
  try {
    debugAuth(); // Add this line to debug
    const body = await request.json();

    // Create JWT client
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create Google Sheets instance
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data
    const values = [[
      new Date().toISOString(),
      body.name,
      body.email,
      body.phone,
      body.service,
      body.address,
      body.preferredDate,
      body.message,
    ]];

    // Append the row
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Sheet1!A:H', // Adjust range based on your sheet name and columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to append data to sheet');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Submission error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to submit form',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 