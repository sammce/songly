import Head from 'next/head';
import classes from './index.module.css';
import { Canvas } from '@react-three/fiber';
import { RotatingMesh } from '@/components';

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
      <main className={classes.container}>
        <div className={classes.hero}>
          <h1 className={classes.title}>Songly</h1>
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <RotatingMesh x y>
              <boxGeometry />
              <meshStandardMaterial />
            </RotatingMesh>
          </Canvas>
        </div>
      </main>
    </>
  );
}
