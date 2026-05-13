import React, { useEffect } from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import PageHeader from '../components/PageHeader';

export default function ServicesPage() {
  // Real-time SEO: set document title + meta description dynamically
  useEffect(() => {
    // Title
    document.title = 'Web Development & Digital Services | Radhekripa Web Developers';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      (metaDesc as HTMLMetaElement).name = 'description';
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content =
      'Radhekripa Web Developers offers premium web development, UI/UX design, e-commerce solutions, SEO optimisation, and LinkedIn branding for growing businesses worldwide.';

    // Meta keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      (metaKw as HTMLMetaElement).name = 'keywords';
      document.head.appendChild(metaKw);
    }
    (metaKw as HTMLMetaElement).content =
      'web development, UI UX design, ecommerce solutions, SEO services, LinkedIn optimisation, React Next.js agency, digital agency India';

    // Open Graph
    const ogTags: Record<string, string> = {
      'og:title': 'Premium Digital Services | Radhekripa Web Developers',
      'og:description':
        'End-to-end web development, design & SEO services for modern brands. 250+ projects delivered worldwide.',
      'og:type': 'website',
      'og:url': 'https://radhekripa.com/services',
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

    // JSON-LD structured data for services
    const existingLd = document.getElementById('services-jsonld');
    if (existingLd) existingLd.remove();
    const ld = document.createElement('script');
    ld.id = 'services-jsonld';
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Radhekripa Web Developer Services',
      description: 'Premium digital services including web development, UI/UX design, e-commerce, and SEO.',
      url: 'https://radhekripa.com/services',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Website Development', url: 'https://radhekripa.com/services#website-development' },
        { '@type': 'ListItem', position: 2, name: 'UI/UX Design', url: 'https://radhekripa.com/services#ui-ux-design' },
        { '@type': 'ListItem', position: 3, name: 'E-commerce Solutions', url: 'https://radhekripa.com/services#ecommerce' },
        { '@type': 'ListItem', position: 4, name: 'SEO Optimisation', url: 'https://radhekripa.com/services#seo' },
        { '@type': 'ListItem', position: 5, name: 'Maintenance & Support', url: 'https://radhekripa.com/services#support' },
        { '@type': 'ListItem', position: 6, name: 'LinkedIn Optimisation', url: 'https://radhekripa.com/services#linkedin' },
      ],
    });
    document.head.appendChild(ld);

    // Cleanup on unmount
    return () => {
      document.title = 'Radhekripa Web Developers';
      document.getElementById('services-jsonld')?.remove();
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="End-to-end digital services — from high-converting e-commerce to bespoke SaaS interfaces — engineered for modern, visionary brands."
        image="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2070"
        label="What we do"
      />
      <Services />
      <Process />
    </>
  );
}
