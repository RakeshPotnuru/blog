import { Box, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Searchbar = ({ placeholder, width, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup width={width}>
        <Input placeholder={placeholder ? placeholder : 'Search anything...'} />
        <InputRightAddon
          as={'button'}
          type={'submit'}
          cursor="pointer"
          bgColor="brand.50"
        >
          <Search2Icon color="white" />
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default Searchbar;
