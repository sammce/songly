import Head from 'next/head';
import classes from './index.module.css';
import { Canvas } from '@react-three/fiber';
import {
  RotatingMesh,
  GuitarModel,
  MicrophoneModel,
  Button,
  DesktopOnly,
} from '@/components';
import MusicNote from '@/components/MusicNote';

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
          <DesktopOnly>
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

              <MusicNote note="clef" radius={15} axis={0.5} speed={0.9} />

              <MusicNote
                note="quaver"
                radius={20}
                axis={0.8}
                speed={0.7}
                direction="counter-clockwise"
              />

              <RotatingMesh rotation={[-0.4, 0, 0.4]}>
                <MicrophoneModel />
              </RotatingMesh>
            </Canvas>
          </DesktopOnly>

          <div className={classes.info}>
            <h1 className="gradient-text">Songly</h1>
            <p>
              <span>Connect</span> with like minded listeners.
            </p>
            <p>
              <span>Share</span> your taste with friends.
            </p>
            <p>
              <span>Listen</span> to new music curated for you.
            </p>
            <div>
              <Button style={{ width: '100%' }}>
                Start your music journey
              </Button>
            </div>
          </div>

          <DesktopOnly>
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

              <MusicNote
                note="beamed"
                radius={15}
                axis={0.5}
                direction="counter-clockwise"
                scale={0.7}
                center={[5, 0, 0]}
              />

              <MusicNote
                note="semiquaver"
                radius={12}
                scale={0.7}
                center={[5, 0, 0]}
              />

              <RotatingMesh
                position={[0, -17, 0]}
                scale={[0.5, 0.5, 0.5]}
                rotation={[-0.6, -0.8, -0.5]}
              >
                <GuitarModel />
              </RotatingMesh>
            </Canvas>
          </DesktopOnly>
        </div>
      </main>
    </>
  );
}
