import classes from './404.module.css';
import { cn } from '@/util';
import { Button } from '@/components';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundPage = () => {
  const titleClasses = cn(classes.title, 'gradient-text');
  const containerClasses = cn(classes.wrapper, 'container');
  return (
    <>
      <Head>
        <title>Uh oh...</title>
      </Head>
      <div className={containerClasses}>
        <div className={classes.innerWrapper}>
          <h1 className={titleClasses}>Uh oh...</h1>
          <p>We couldn&apos;t find what you were looking for...</p>

          <Link href="/">
            <Button style={{ width: 400, marginTop: '1rem' }}>
              Return to home page
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
