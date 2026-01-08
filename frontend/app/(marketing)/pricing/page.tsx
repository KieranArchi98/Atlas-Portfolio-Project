import { PricingFeatures } from '@/app/sharedComponents/sections/PricingFeatures';
import { PricingFAQ } from '@/app/sharedComponents/sections/PricingFAQ';
import { PricingFinalCTA } from '@/app/sharedComponents/sections/PricingFinalCTA';
import { PricingTable } from '@/app/sharedComponents/sections/PricingTable';

export default function PricingPage() {
  return (
    <div className="bg-white">
      <PricingTable
        icon="trending-up"
        title="Dynamic Pricing"
        subtitle="Operational baselines for professional engagement and technical consultation."
        plans={[
          {
            name: 'Consultation',
            price: '£0',
            description: 'Initial architectural review and project scope discussion.',
            features: [
              'Technical Assessment',
              'Project Feasibility',
              'Roadmap Generation'
            ],
            cta: 'Initialize Meeting'
          },
          {
            name: 'Development',
            price: '£75',
            description: 'Full-stack engineering and custom application deployment.',
            features: [
              'Custom Web/App UI',
              'Performance Optimization',
              'Infrastructure Scaling',
              'Priority Support'
            ],
            isPopular: true,
            cta: 'Start Project'
          },
          {
            name: 'Infrastructure',
            price: '£150',
            description: 'Advanced networking, home-lab setups, and server architecture.',
            features: [
              'Network Hardening',
              'Server Virtualization',
              'Security Auditing',
              'Direct Protocol Access'
            ],
            cta: 'Request Architecture'
          }
        ]}
      />

      {/* What's Included Grid */}
      <PricingFeatures />

      {/* Final High-Impact CTA */}
      <PricingFinalCTA />

      {/* FAQ Section */}
      <PricingFAQ />
    </div>
  );
}
