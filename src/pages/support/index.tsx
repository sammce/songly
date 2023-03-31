import { Button, Feature, Input } from '@/components';
import { TextArea } from '@/components/Input';
import Head from 'next/head';
import classes from './support.module.css';
import { useState } from 'react';

const SupportPage = () => {
  const [buttonText, setButtonText] = useState('Submit');

  const handleSubmit = () => {
    setButtonText('...');
    setTimeout(() => {
      setButtonText('We got your message!');
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Support portal</title>
      </Head>
      <main className={classes.main}>
        <Feature style={{ maxWidth: '700px' }}>
          <h1>Support portal</h1>
          <p>Fill in the form below to raise an issue with our support team.</p>
          <hr />
          <form onSubmit={(event) => event.preventDefault()}>
            <Input
              label="Name"
              autoComplete="name"
              placeholder="John McClane"
              type="text"
            />
            <Input
              label="Email"
              autoComplete="email"
              placeholder="diehard@domain.com"
              type="text"
            />
            <TextArea
              label="Message"
              placeholder="Describe the issue you're facing"
            />
            <br />
            <Button
              onClick={handleSubmit}
              style={
                buttonText.includes('message!')
                  ? {
                      backgroundColor: 'green',
                      boxShadow: '0 2px 6px 2px rgba(41, 97, 41, 0.568)',
                    }
                  : undefined
              }
            >
              {buttonText}
            </Button>
          </form>
        </Feature>
      </main>
    </>
  );
};

export default SupportPage;
