export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', color: '#fff', padding: '2rem', textAlign: 'center', marginTop: '4rem' }}>
      <p style={{ marginBottom: '0.5rem' }}>
        {/* P3: update with real social links */}
        Active Learning Business
      </p>
      <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
        &copy; {new Date().getFullYear()} Active Learning Business. All rights reserved.
      </p>
    </footer>
  );
}
