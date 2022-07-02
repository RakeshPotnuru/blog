import Script from 'next/script';

const BreadcrumbSchemaMarkup = ({ items }) => {
  return (
    <Script
      type={'application/ld+json'}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item) => {
            return {
              '@type': 'ListItem',
              position: item.position,
              name: item.name,
              item: item.item
            };
          })
        })
      }}
    />
  );
};

export default BreadcrumbSchemaMarkup;
