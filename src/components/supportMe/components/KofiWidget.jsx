import { Box } from '@chakra-ui/react';

const KofiWidget = () => {
  return (
    <Box
      bgGradient={
        'radial(circle farthest-corner at 10% 20%,  rgba(255,221,51,1) 100.2%, rgba(187,187,187,1) 100.2%)'
      }
      rounded={'lg'}
      my={2}
    >
      <iframe
        id={'kofiframe'}
        src={process.env.NEXT_PUBLIC_KOFI_WIDGET_EMBED_URL}
        style={{
          border: 'none',
          width: '100%'
        }}
        height={'700'}
      ></iframe>
    </Box>
  );
};

export default KofiWidget;
