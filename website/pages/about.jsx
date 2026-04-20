import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About — Active Learning Business</title>
        <meta name="description" content="Active Learning Business is a content and platform company at the intersection of learning science and AI — founded by Khang, CEO." />
        <meta property="og:title" content="About — Active Learning Business" />
        <meta property="og:description" content="At the intersection of learning science and AI." />
      </Head>
      <Nav />
      <main style={{ maxWidth: '680px', margin: '5rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h1)', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
          Why passive learning is broken — and what we're doing about it.
        </h1>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-body)' }}>
          Most students spend hours studying and retain almost nothing. They re-read chapters, highlight everything, and feel productive — but when the exam arrives, the knowledge isn't there. That's not a discipline problem. It's a method problem.
        </p>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-body)' }}>
          Active Learning Business exists to fix that. We teach the science of learning — Feynman technique, spaced repetition, retrieval practice — and show you exactly how to use AI as a tool to apply these methods, not just consume more content passively.
        </p>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-body)' }}>
          Right now, that's a blog. Two posts a week, built for university students but useful for anyone who needs to learn faster and retain more. Vietnamese content is coming — the ideas work in any language.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-body)' }}>
          Later: an AI study assistant platform that puts these methods into practice for you, every session.
        </p>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-small)' }}>
            Founded by <strong style={{ color: 'var(--color-text-primary)' }}>Khang</strong> — Bangkok, Thailand.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
