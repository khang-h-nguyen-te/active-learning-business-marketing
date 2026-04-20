import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About — Active Learning Business</title>
        <meta name="description" content="Learn about our mission to make active learning accessible to everyone." />
      </Head>
      <Nav />
      <main style={{ maxWidth: '720px', margin: '4rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>
          {/* P3: update with real about headline */}
          About Us
        </h1>
        <p style={{ marginBottom: '1rem', color: '#475569' }}>
          {/* P3: update with real about content from discovery interview */}
          We are passionate about transforming how people learn. Active learning is at the core of everything we do — from the programs we design to the resources we create.
        </p>
        <p style={{ marginBottom: '1rem', color: '#475569' }}>
          Our approach is grounded in research and refined through practice. We work with educators, coaches, and organisations to build learning experiences that engage, challenge, and stick.
        </p>
        <p style={{ color: '#475569' }}>
          {/* P3: personalise with owner name and story */}
          Founded with a simple belief: that everyone deserves access to learning methods that actually work.
        </p>
      </main>
      <Footer />
    </>
  );
}
