
import { InteractiveHero } from '@/app/sharedComponents/sections/InteractiveHero';
import { LogoShowcase } from '@/app/sharedComponents/sections/LogoShowcase';
import { FeatureGrid } from '@/app/sharedComponents/sections/FeatureGrid';
import { SystemCTA } from '@/app/sharedComponents/sections/SystemCTA';
import { ProblemSolution } from '@/app/sharedComponents/sections/ProblemSolution';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <InteractiveHero
        titlePrefix="Portfolio Intelligence for   "
        dynamicPhrases={["Designers.", "Engineers.", "Strategists.", "Your Brand."]}
        titleSuffix=""
        subtitle="A precision-engineered platform for high-impact professionals. Build, manage, and scale your digital identity with systematic clarity."
        primaryAction={{ label: 'Get Started', href: '/signup' }}
        secondaryAction={{ label: 'View Demo', href: '/portfolio' }}
      />

      <LogoShowcase
        trackALogos={[
          { name: 'TechCore', imagePath: '/logo-techcore.png' },
          { name: 'DataFlow', imagePath: '/logo-dataflow.png' },
          { name: 'CloudSync', imagePath: '/logo-cloudsync.png' },
          { name: 'NexusAI', imagePath: '/logo-nexusai.png' },
          { name: 'Quantum Labs', imagePath: '/logo-quantumlabs.png' },
        ]}
        trackBLogos={[
          { name: 'VectorSpace', imagePath: '/logo-vectorspace.png' },
          { name: 'TechCore', imagePath: '/logo-techcore.png' },
          { name: 'DataFlow', imagePath: '/logo-dataflow.png' },
          { name: 'CloudSync', imagePath: '/logo-cloudsync.png' },
          { name: 'NexusAI', imagePath: '/logo-nexusai.png' },
        ]}
      />

      <FeatureGrid
        columns={3}
        features={[
          {
            title: "Full-Stack Engineering",
            description: "End-to-end development of modern web and mobile applications focused on scalability and fluid UX.",
            icon: "home",
            variant: "stack"
          },
          {
            title: "Network Architecture",
            description: "Designing and managing complex home lab environments, secure routing, and infrastructure protocols.",
            icon: "hidden",
            variant: "network"
          },
          {
            title: "Technical Operations",
            description: "Specialized support and systematic maintenance for high-performance digital environments.",
            icon: "search",
            variant: "ops"
          }
        ]}
      />

      <ProblemSolution />

      <SystemCTA
        title="Ready to Build Your Brand?"
        description="Join thousands of professionals who trust Atlas to power their digital presence."
        primaryAction={{ label: 'Join Now', href: '/signup' }}
        secondaryAction={{ label: 'Learn More', href: '/contact' }}
      />
    </div>
  );
}
