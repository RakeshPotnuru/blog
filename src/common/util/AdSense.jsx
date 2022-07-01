import Script from 'next/script';

const AdSense = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID}`}
      crossorigin={'anonymous'}
      strategy={'afterInteractive'}
    ></Script>
  );
};

export default AdSense;
