import { IconButton, Link, Tooltip } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaReddit,
  FaTwitter
} from 'react-icons/fa';

import siteConfig from '../../../config/site.config';

const SocialShareIcon = ({ label, placement, href, icon }) => {
  return (
    <Tooltip hasArrow label={label} placement={placement}>
      <Link href={href} tabIndex={-1} isExternal>
        <IconButton aria-label={label} icon={icon} rounded={'full'} />
      </Link>
    </Tooltip>
  );
};

const SocialShareLinks = ({
  toolTipPlacement,
  onCopy,
  hasCopied,
  title,
  slug
}) => {
  return (
    <>
      <SocialShareIcon
        label={'Share on Twitter'}
        placement={toolTipPlacement}
        href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/${slug}&text="${title}"%20by%20${siteConfig.seo.twitterUsername}`}
        icon={<FaTwitter />}
      />
      <SocialShareIcon
        label={'Share on LinkedIn'}
        placement={toolTipPlacement}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
        icon={<FaLinkedin />}
      />
      <SocialShareIcon
        label={'Share on Facebook'}
        placement={toolTipPlacement}
        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
        icon={<FaFacebook />}
      />
      <SocialShareIcon
        label={'Share on Reddit'}
        placement={toolTipPlacement}
        href={`https://reddit.com/submit?url=${process.env.NEXT_PUBLIC_SITE_URL}/${slug}&title=${title}`}
        icon={<FaReddit />}
      />
      <Tooltip hasArrow label="Copy Link" placement={toolTipPlacement}>
        <IconButton
          onClick={onCopy}
          aria-label="copy link"
          icon={
            hasCopied ? (
              <CheckIcon color={'white'} fontSize={'lg'} />
            ) : (
              <FaLink />
            )
          }
          {...(hasCopied && { bg: 'green.400', _hover: { bg: 'green.500' } })}
          rounded={'full'}
        />
      </Tooltip>
    </>
  );
};

export default SocialShareLinks;
