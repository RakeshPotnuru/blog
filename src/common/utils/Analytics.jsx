import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
        strategy={'afterInteractive'}
      />
      <Script id={'gtag'} strategy={'afterInteractive'}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}');
       `}
      </Script>
    </>
  );
};

export default Analytics;
