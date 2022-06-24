import { IconButton, Link, Tooltip } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaReddit,
  FaTwitter
} from 'react-icons/fa';

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
        href={`https://twitter.com/intent/tweet?url=https://blog.itsrakesh.co/${slug}&text="${title}"%20by%20@rakesh_at_tweet`}
        icon={<FaTwitter />}
      />
      <SocialShareIcon
        label={'Share on LinkedIn'}
        placement={toolTipPlacement}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.itsrakesh.co/${slug}`}
        icon={<FaLinkedin />}
      />
      <SocialShareIcon
        label={'Share on Facebook'}
        placement={toolTipPlacement}
        href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.itsrakesh.co/${slug}`}
        icon={<FaFacebook />}
      />
      <SocialShareIcon
        label={'Share on Reddit'}
        placement={toolTipPlacement}
        href={`https://reddit.com/submit?url=https://blog.itsrakesh.co/${slug}&title=${title}`}
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
