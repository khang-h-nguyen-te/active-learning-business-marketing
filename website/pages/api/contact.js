export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  // P3: wire to Supabase contact_submissions table
  res.status(200).json({ message: 'Received' });
}
