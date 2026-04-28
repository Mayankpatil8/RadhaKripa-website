import React from 'react';
import Portfolio from '../components/Portfolio';
import PageHeader from '../components/PageHeader';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="A curated selection of our finest projects. Discover how we've helped visionary brands achieve technical excellence."
        image="ourwork.png"
        label="Selected Projects"
      />
      <Portfolio />
    </>
  );
}
