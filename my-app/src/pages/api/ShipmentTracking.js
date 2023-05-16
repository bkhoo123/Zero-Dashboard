import fetch from 'node-fetch';

const apiKey = 'EZAKdf10c9afd41447559ed233202a39dce5YUcGDpDyFk2dQ0hdZZygUA'; // Replace with your actual API key

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { tracking, carrier } = req.body;
  const url = `https://api.easypost.com/v2/trackers`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        tracker: {
          tracking_code: tracking,
          carrier: carrier,
        },
      }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log("EasyPost API response:", data); // Add this line to log the response
        res.status(200).json({ data: data });
    } else {
      console.error('Error tracking shipment:', await response.text());
      res.status(500).json({ error: 'An error occurred while fetching the tracking data.' });
    }
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ error: 'An error occurred while fetching the tracking data.', message: error.message });
  }
}
