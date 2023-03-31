import Head from 'next/head';
import { cn } from '@/util';
import classes from './about.module.css';
import Image from 'next/image';
import darkListening from '@/../public/dark-listening.jpg';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Songly</title>
      </Head>
      <main className={cn('container', classes.main)}>
        <h1 className={cn('gradient-text', classes.heading)}>About Songly</h1>

        <p className={classes.paragraph}>
          <Image
            height={250}
            className={classes.image}
            src={darkListening}
            alt="girl listening to music"
          />
          Here at Songly, music is our passion. We often found ourselves
          discussing the new music we were listening to, or the personalities in
          the music ecosystem we were following.
          <br />
          <br />
          We noticed that there was no easy way to share our music, as social
          medias aren&apos;t designed with music in mind. We wanted a place
          where we could find and share our own music with like minded
          individuals. Songly is just that. A platform to <span>
            connect
          </span>, <span>share</span> and <span>listen.</span>
        </p>
      </main>
    </>
  );
};

export default AboutPage;
