import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <>
      <Head>
        <title>Active Learning Business — Stop Passive Learning</title>
        <meta name="description" content="Stop passive learning — use AI to actually retain what you study. Science-backed techniques and AI tools for university students and lifelong learners." />
        <meta property="og:title" content="Active Learning Business — Stop Passive Learning" />
        <meta property="og:description" content="Stop passive learning — use AI to actually retain what you study." />
        <meta property="og:image" content="/images/og-home.webp" />
      </Head>
      <Nav />
      <main>
        <section style={{ background: 'var(--color-primary)', color: 'var(--color-text-inverse)', padding: '5rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-hero)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Stop passive learning.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Use AI to actually retain what you study. Science-backed techniques — Feynman, spaced repetition, retrieval practice — with AI as the engine that makes it stick.
          </p>
          <a href="/blog" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.875rem 2.5rem', borderRadius: 'var(--radius)', fontWeight: 700, fontSize: '1rem', display: 'inline-block' }}>
            Read the Blog
          </a>
        </section>

        <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 600, textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text-primary)' }}>
            What you'll learn here
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Active Learning Techniques', desc: 'Feynman, spaced repetition, retrieval practice — the methods that actually move information from short-term to long-term memory.' },
              { title: 'Student Productivity', desc: 'Study systems, focus workflows, and habit stacks built for university students who want results, not just hours logged.' },
              { title: 'AI in Education', desc: 'Which AI tools are worth using, how to use them as a personal tutor, and what's changing in how we learn.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '1.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-body)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
