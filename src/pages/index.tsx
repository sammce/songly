import Head from 'next/head';
import classes from './index.module.css';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Songly</title>
        <meta
          name="description"
          content="The next generation social media with a musical twist"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <h1>Primary</h1>
        <div className={classes.flex}>
          <Button>Filled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <h1>Highlight</h1>
        <div className={classes.flex}>
          <Button color="highlight">Filled</Button>
          <Button variant="outline" color="highlight">
            Outline
          </Button>
          <Button variant="ghost" color="highlight">
            Ghost
          </Button>
        </div>
      </main>
    </>
  );
}
