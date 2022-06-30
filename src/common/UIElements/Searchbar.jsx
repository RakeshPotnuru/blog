import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Searchbar = ({ placeholder, width, searchHandler }) => {
  return (
    <form onSubmit={(e) => searchHandler(e)}>
      <InputGroup width={width}>
        <Input
          type={'text'}
          name={'search'}
          placeholder={placeholder ? placeholder : 'Search anything...'}
        />
        <InputRightAddon
          aria-label={'Search'}
          as={'button'}
          type={'submit'}
          cursor={'pointer'}
          bgColor={'brand.50'}
        >
          <Search2Icon color={'white'} />
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default Searchbar;
