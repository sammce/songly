import { useFBX } from '@react-three/drei';

const GuitarModel = () => {
  const fbx = useFBX('/guitar.fbx');
  return <primitive object={fbx} />;
};

export default GuitarModel;
