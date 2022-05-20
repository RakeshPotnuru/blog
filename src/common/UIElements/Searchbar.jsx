import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Searchbar = ({ placeholder, width }) => {
  return (
    <InputGroup width={width}>
      <Input placeholder={placeholder ? placeholder : 'Search anything...'} />
      <InputRightAddon cursor="pointer" bgColor="brand.50">
        <Search2Icon color="white" />
      </InputRightAddon>
    </InputGroup>
  );
};

export default Searchbar;
