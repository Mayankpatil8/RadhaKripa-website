import React, { useEffect } from 'react';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  useEffect(() => {
    // ── Page Title ──────────────────────────────────────────────────────────
    document.title = 'About Us | Radhekripa Web Developers – Premium Digital Agency';

    // ── Meta Description ────────────────────────────────────────────────────
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      (metaDesc as HTMLMetaElement).name = 'description';
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content =
      'Radhekripa Web Developers is a premium digital agency based in India, specialising in high-performance web development, UI/UX design, e-commerce, and SEO for brands worldwide. Learn our story.';

    // ── Meta Keywords ───────────────────────────────────────────────────────
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      (metaKw as HTMLMetaElement).name = 'keywords';
      document.head.appendChild(metaKw);
    }
    (metaKw as HTMLMetaElement).content =
      'about Radhekripa, web development agency India, premium digital agency, React Next.js agency, UI UX design studio, agency story';

    // ── Open Graph ──────────────────────────────────────────────────────────
    const ogTags: Record<string, string> = {
      'og:title': 'About Radhekripa Web Developers | Premium Digital Agency',
      'og:description':
        'We engineer premium digital ecosystems that elevate brands and drive substantial growth. 5+ years, 250+ projects, 50+ global clients.',
      'og:type': 'website',
      'og:url': 'https://radhekripa.com/about',
      'og:image': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        (tag as HTMLMetaElement).setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      (tag as HTMLMetaElement).content = content;
    });

    // ── JSON-LD: Organization ───────────────────────────────────────────────
    const existingLd = document.getElementById('about-jsonld');
    if (existingLd) existingLd.remove();
    const ld = document.createElement('script');
    ld.id = 'about-jsonld';
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Radhekripa Web Developers',
      url: 'https://radhekripa.com',
      logo: 'https://radhekripa.com/logo@@.png',
      description:
        'Premium digital agency specialising in web development, UI/UX design, e-commerce, SEO and LinkedIn optimisation for brands worldwide.',
      foundingDate: '2024',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
      areaServed: 'Worldwide',
      sameAs: [
        'https://www.linkedin.com/company/radhekripa',
        'https://www.instagram.com/radhekripa',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://radhekripa.com/contact',
      },
    });
    document.head.appendChild(ld);

    return () => {
      document.title = 'Radhekripa Web Developers';
      document.getElementById('about-jsonld')?.remove();
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="We build more than just websites. We engineer premium digital ecosystems that elevate brands and drive substantial growth."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2068"
        label="About Our Agency"
      />
      <About />
      <WhyChooseUs />
    </>
  );
}
