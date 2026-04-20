import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <>
      <Head>
        <title>Active Learning Business</title>
        <meta name="description" content="Empowering learners through active, engaging educational experiences." />
        {/* P3: update with real meta description */}
      </Head>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: 'var(--color-primary)', color: '#fff', padding: '5rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            {/* P3: update with real headline */}
            Learn Actively. Grow Faster.
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem' }}>
            {/* P3: update with real value proposition */}
            We help learners and educators unlock the power of active learning techniques to achieve better outcomes.
          </p>
          <a href="/contact" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 2rem', borderRadius: 'var(--radius)', fontWeight: 'bold' }}>
            Get Started
          </a>
        </section>

        {/* Value props */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
          {/* P3: update with real value propositions */}
          {[
            { title: 'Engaging Methods', desc: 'Move beyond passive consumption to hands-on, meaningful learning.' },
            { title: 'Proven Results', desc: 'Evidence-based techniques that stick — not just in the moment, but long-term.' },
            { title: 'Tailored for You', desc: 'Strategies that fit your context, whether classroom, corporate, or self-directed.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: '#64748b' }}>{item.desc}</p>
            </div>
          ))}
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
