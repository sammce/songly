import Head from 'next/head';
import classes from './index.module.css';
import { Canvas } from '@react-three/fiber';
import {
  RotatingMesh,
  GuitarModel,
  MicrophoneModel,
  WigglingMesh,
} from '@/components';

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
          <Canvas
            camera={{
              fov: 60,
              near: 1,
              far: 1000,
              position: [0, 0, 75],
            }}
          >
            <directionalLight
              color="#3b83e2"
              intensity={0.6}
              position={[0, 0, 10]}
            />
            <directionalLight
              color="#ff81a6"
              intensity={0.8}
              position={[5, 0, 5]}
            />

            <WigglingMesh x={[-15, 15]} y={[-5, 5]} rotation={[-0.4, 0, 0.4]}>
              <group>
                <MicrophoneModel />
              </group>
            </WigglingMesh>
          </Canvas>
          <h1 className={classes.title}>Songly</h1>
          <Canvas
            camera={{
              fov: 60,
              near: 1,
              far: 1000,
              position: [0, 0, 50],
            }}
          >
            <ambientLight color="white" intensity={0.1} />
            <directionalLight
              color="#c4a664"
              intensity={1}
              position={[-5, 0, 7]}
            />
            <directionalLight
              color="#3b83e2"
              intensity={1.2}
              position={[0, 0, 10]}
            />
            <directionalLight
              color="#ff81a6"
              intensity={1.5}
              position={[5, 0, 5]}
            />

            <RotatingMesh
              scale={[0.5, 0.5, 0.5]}
              rotation={[-0.6, -0.8, -0.5]}
              position={[0, -20, 0]}
            >
              <GuitarModel />
            </RotatingMesh>
          </Canvas>
        </div>
      </main>
    </>
  );
}
