import { CheckIcon } from '@chakra-ui/icons';
import { IconButton, Link, SkeletonCircle, Tooltip } from '@chakra-ui/react';
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaReddit,
  FaTwitter
} from 'react-icons/fa';

const SocialShareIcon = ({ isLoaded, label, placement, href, icon }) => {
  return (
    <SkeletonCircle size={10} isLoaded={isLoaded}>
      <Tooltip hasArrow label={label} placement={placement}>
        <Link href={href} tabIndex={-1} isExternal>
          <IconButton aria-label={label} icon={icon} rounded={'full'} />
        </Link>
      </Tooltip>
    </SkeletonCircle>
  );
};

const SocialShareLinks = ({
  toolTipPlacement,
  isLoaded,
  onCopy,
  hasCopied,
  title,
  slug
}) => {
  return (
    <>
      <SocialShareIcon
        isLoaded
        label={'Share on Twitter'}
        placement={toolTipPlacement}
        href={`https://twitter.com/intent/tweet?url=https://blog.itsrakesh.co/${slug}&text="${title}"%20by%20@rakesh_at_tweet`}
        icon={<FaTwitter />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on LinkedIn'}
        placement={toolTipPlacement}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.itsrakesh.co/${slug}`}
        icon={<FaLinkedin />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on Facebook'}
        placement={toolTipPlacement}
        href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.itsrakesh.co/${slug}`}
        icon={<FaFacebook />}
      />
      <SocialShareIcon
        isLoaded
        label={'Share on Reddit'}
        placement={toolTipPlacement}
        href={`https://reddit.com/submit?url=https://blog.itsrakesh.co/${slug}&title=${title}`}
        icon={<FaReddit />}
      />
      <SkeletonCircle size={10} isLoaded={isLoaded}>
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
      </SkeletonCircle>
    </>
  );
};

export default SocialShareLinks;
