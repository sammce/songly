import { useFBX, useTexture } from '@react-three/drei';

const HeadphoneModel = () => {
  const fbx = useFBX('/mic/mic.fbx');
  const props = useTexture({
    map: 'mic/texture/mic_body_BaseColor.png',
    displacementMap: 'mic/texture/mic_body_Height.png',
    normalMap: 'mic/texture/mic_body_Normal.png',
    roughnessMap: 'mic/texture/mic_body_Roughness.png',
    metalnessMap: 'mic/texture/mic_body_Metallic.png',
  });
  return (
    <mesh position={[0, -15, 0]}>
      <primitive object={fbx} />
      <meshStandardMaterial {...props} />
    </mesh>
  );
};

export default HeadphoneModel;
