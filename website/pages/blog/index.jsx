import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — Active Learning Business</title>
        <meta name="description" content="Insights, strategies, and stories about active learning." />
      </Head>
      <Nav />
      <main style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>Blog</h1>
        <p style={{ color: '#64748b', marginBottom: '3rem' }}>Insights on active learning — coming soon.</p>
        {/* P3: Writer agent will populate posts here */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '2px dashed #e2e8f0', borderRadius: 'var(--radius)', color: '#94a3b8' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Posts coming soon</p>
          <p style={{ fontSize: '0.875rem' }}>Your Writer agent will start publishing here after P3.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
