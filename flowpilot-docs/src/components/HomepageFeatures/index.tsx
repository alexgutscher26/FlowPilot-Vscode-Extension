import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Explain Selection',
    emoji: '💡',
    description: (
      <>
        Highlight any code snippet and get instant, step-by-step explanations.
        Perfect for understanding complex algorithms, legacy code, or unfamiliar libraries.
      </>
    ),
  },
  {
    title: 'Debug Faster',
    emoji: '🐞',
    description: (
      <>
        Stuck on an error? FlowPilot analyzes stack traces, explains root causes,
        and suggests fixes—all within VS Code.
      </>
    ),
  },
  {
    title: 'Code Reviews',
    emoji: '📝',
    description: (
      <>
        Get on-demand code reviews that check for bugs, security vulnerabilities,
        and code quality issues before you commit.
      </>
    ),
  },
  {
    title: 'Session Analytics',
    emoji: '📊',
    description: (
      <>
        Track your coding sessions, visualize language usage, and see your progress
        over time via the web dashboard.
      </>
    ),
  },
  {
    title: 'Privacy First',
    emoji: '🔒',
    description: (
      <>
        Your code is sent to the LLM only when you explicitly trigger a command.
        No training on your data, no persistent storage.
      </>
    ),
  },
  {
    title: 'Lightning Fast',
    emoji: '⚡',
    description: (
      <>
        Powered by streaming responses and Tree-sitter AST parsing for near-instant
        analysis and explanations.
      </>
    ),
  },
];

function Feature({ title, emoji, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} role="img" aria-label={`${title} icon`}>
          {emoji}
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresHeading}>
            Powerful Features for Modern Development
          </Heading>
          <p className={styles.featuresSubheading}>
            Everything you need to code smarter, debug faster, and ship with confidence
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}