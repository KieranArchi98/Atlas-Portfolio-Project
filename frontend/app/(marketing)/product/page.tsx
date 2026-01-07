import { ProductHero } from '../../sharedComponents/sections/ProductHero';
import { FeatureGrid } from '../../sharedComponents/sections/FeatureGrid';
import { MetricsStats } from '@/app/sharedComponents/sections/MetricsStats';
import { Testimonials } from '@/app/sharedComponents/sections/Testimonials';
import { Certifications } from '@/app/sharedComponents/sections/Certifications';
import { ProductFeatureVisual } from '@/app/sharedComponents/sections/ProductFeatureVisuals';

export default function ProductPage() {
  return (
    <>
      <ProductHero
        sectionTag="SYSTEM_STATUS: ONLINE"
        title="Systems & Software Engineering"
        description="Expert technical diagnostics, robust network infrastructure, and full-stack software solutions. Comprehensive system administration for modern enterprises."
      />

      {/* Metrics Section - White Theme */}
      <MetricsStats variant="white" />
      <br></br>
      <br></br>

      <FeatureGrid
        title=""
        columns={2}
        visualComponent={ProductFeatureVisual}
        features={[
          {
            title: 'Full Stack Development',
            description: 'End-to-end software engineering covering modern web apps, mobile solutions, and robust backend systems.',
            icon: 'code',
            variant: 'web'
          },
          {
            title: 'Cloud & Network Systems',
            description: 'Comprehensive infrastructure management including networking, cloud architecture, and system administration.',
            icon: 'server',
            variant: 'network-arch'
          },
          {
            title: 'Technical Operations',
            description: 'Expert technical support, hardware maintenance, and operational optimization for enterprise environments.',
            icon: 'settings',
            variant: 'mobile'
          },
          {
            title: 'AI Integration',
            description: 'Leveraging AI for intelligent automation, data synthesis, and next-generation workflow enhancement.',
            icon: 'check',
            variant: 'ai'
          },
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Certifications Section */}
      <Certifications />
    </>
  );
}
