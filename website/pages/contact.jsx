import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Message sent! We\'ll be in touch soon.');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <Head>
        <title>Contact — Active Learning Business</title>
        <meta name="description" content="Get in touch with us." />
      </Head>
      <Nav />
      <main style={{ maxWidth: '560px', margin: '4rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>Get in Touch</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0' }} />
          <input type="email" placeholder="Your email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
            style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0' }} />
          <textarea placeholder="Your message" required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
            style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', resize: 'vertical' }} />
          <button type="submit" style={{ background: 'var(--color-accent)', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: 'var(--radius)', cursor: 'pointer', fontWeight: 'bold' }}>
            Send Message
          </button>
        </form>
        {status && <p style={{ marginTop: '1rem', color: '#475569' }}>{status}</p>}
      </main>
      <Footer />
    </>
  );
}
