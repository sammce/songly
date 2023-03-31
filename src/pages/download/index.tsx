import classes from './download.module.css';
import Head from 'next/head';
import { BsApple, BsDownload } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components';
import { cn } from '@/util';

const DownloadPage = () => {
  return (
    <>
      <Head>
        <title>Download Songly</title>
      </Head>
      <main className={cn('container', classes.main)}>
        <BsDownload size={150} />
        <div>
          <Button className={classes.iconButton}>
            <BsApple className={classes.icon} size={24} /> Get Songly on the App
            Store
          </Button>
          <Button
            className={classes.iconButton}
            color="highlight"
            style={{ paddingLeft: '0.9rem' }}
          >
            <div className={cn(classes.icon, classes.googleWrapper)}>
              <FcGoogle size={24} />
            </div>
            Get Songly on the Google Play Store
          </Button>
        </div>
      </main>
    </>
  );
};

export default DownloadPage;
