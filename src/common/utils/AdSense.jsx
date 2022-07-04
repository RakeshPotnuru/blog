import React, { useEffect } from 'react';

const AdSense = ({ adFormat, adSlot, ...props }) => {
  const loadAds = () => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('Adsense error:', error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className={'adsbygoogle'}
      data-ad-format={adFormat}
      data-ad-client={'ca-pub-5607528168839545'}
      data-ad-slot={adSlot}
      {...props}
    ></ins>
  );
};

export default AdSense;
