import Image from 'next/image';
import { chakra } from '@chakra-ui/react';

const Img = ({ ...props }) => {
  const CustomImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt'].includes(prop)
  });
  return <CustomImage {...props} />;
};

export default Img;
