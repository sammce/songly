import classes from './premium.module.css';
import { cn } from '@/util';
import { Feature } from '@/components';
import { cnIf } from '@/util/cn';
import Head from 'next/head';

interface BadgeProps {
  children: React.ReactNode;
  gradient?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, gradient = false }) => {
  const badgeClasses = cnIf({
    [classes.badge]: true,
    [classes.gradient]: gradient,
  });

  return (
    <div className={badgeClasses}>
      <span>{children}</span>
    </div>
  );
};

const PremiumPage = () => {
  return (
    <>
      <Head>
        <title>Check out premium</title>
      </Head>
      <main className={cn('container', classes.main)}>
        <div className={classes.wrapper}>
          <Feature float="left" style={{ paddingTop: 0, border: 0 }}>
            <Badge>PLUS</Badge>
            <br />
            <b>What&apos;s included:</b>
            <ul className={classes.perks}>
              <li>Remove all ads</li>
              <li>Unlimited listening everyday</li>
              <li>Download music and listen offline</li>
            </ul>
            <br />
            <h1>
              €3.99{' '}
              <span style={{ fontSize: '1rem', fontWeight: '400' }}>
                per month
              </span>
            </h1>
          </Feature>
          <Feature
            float="right"
            style={{
              paddingTop: 0,
              border: '2px solid var(--highlight)',
            }}
          >
            <Badge gradient>PRO</Badge>
            <h2>🔥 Most popular</h2>
            <br />
            <b>What&apos;s included:</b>
            <ul className={classes.perks}>
              <li>Everything from PLUS</li>
              <li>Extra customisations for your profile</li>
              <li>Ultra audio quality</li>
              <li>HD livestream capability</li>
            </ul>

            <br />
            <h1>
              €7.99{' '}
              <span style={{ fontSize: '1rem', fontWeight: '400' }}>
                per month
              </span>
            </h1>
          </Feature>
        </div>
      </main>
    </>
  );
};

export default PremiumPage;
