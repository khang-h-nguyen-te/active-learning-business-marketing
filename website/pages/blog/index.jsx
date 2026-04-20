import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import NewsletterSignup from '../../components/NewsletterSignup';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — Active Learning Business</title>
        <meta name="description" content="Practical guides on active learning techniques and AI study tools. 2x per week for university students, professionals, and educators." />
        <meta property="og:title" content="Blog — Active Learning Business" />
        <meta property="og:description" content="Stop passive learning — use AI to actually retain what you study." />
      </Head>
      <Nav />
      <main style={{ maxWidth: '800px', margin: '5rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h1)', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
          Blog
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem', fontSize: 'var(--text-body)', lineHeight: 1.7 }}>
          Practical guides on active learning and AI study tools. Published every Tuesday and Friday.
        </p>

        {/* Post cards will be prepended here by the Web Developer agent */}

        <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius)', color: 'var(--color-text-secondary)' }}>
          <p style={{ fontSize: 'var(--text-h3)', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>First post drops Tuesday, Apr 22</p>
          <p style={{ fontSize: 'var(--text-body)' }}>Subscribe below to get it in your inbox when it's live.</p>
        </div>
      </main>
      <NewsletterSignup />
      <Footer />
    </>
  );
}
