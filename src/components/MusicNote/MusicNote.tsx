import { useFBX } from '@react-three/drei';
import { useOrbit } from '@/hooks';

import { MeshProps } from '@react-three/fiber';
import { UseOrbitOptions } from '@/hooks/useOrbit';

type Note = 'beamed' | 'quaver' | 'semiquaver' | 'clef';

interface MusicNoteProps extends UseOrbitOptions {
  note: Note;
  scale?: number;
  meshProps?: Omit<MeshProps, 'position' | 'scale'>;
}

const MusicNote: React.FC<MusicNoteProps> = ({
  note,
  scale = 1,
  meshProps,
  ...orbitOptions
}) => {
  const position = useOrbit(orbitOptions);

  const fbx = useFBX(`notes/${note}.fbx`);
  const adjustedScale = 0.03 * scale;

  return (
    <mesh
      position={position}
      scale={[adjustedScale, adjustedScale, adjustedScale]}
      {...meshProps}
    >
      <primitive object={fbx} />
    </mesh>
  );
};

export default MusicNote;
