import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Submitting...');
    // P3: wire to real email platform API
    setStatus('Thanks for signing up!');
    setEmail('');
  }

  return (
    <div style={{ background: 'var(--color-secondary)', color: '#fff', padding: '2rem', borderRadius: 'var(--radius)', maxWidth: '480px', margin: '2rem auto' }}>
      <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Stay in the loop</h3>
      <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#94a3b8' }}>
        {/* P3: update with real newsletter description */}
        Get insights on active learning delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          required
          style={{ flex: 1, padding: '0.5rem', borderRadius: 'var(--radius)', border: 'none' }}
        />
        <button type="submit" style={{ background: 'var(--color-accent)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
          Subscribe
        </button>
      </form>
      {status && <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>{status}</p>}
    </div>
  );
}
