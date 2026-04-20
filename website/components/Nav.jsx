import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ background: 'var(--color-primary)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/" style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold' }}>
        {/* P3: update with real business name */}
        Active Learning Business
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/about" style={{ color: '#fff' }}>About</Link>
        <Link href="/blog" style={{ color: '#fff' }}>Blog</Link>
        <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
      </div>
    </nav>
  );
}
