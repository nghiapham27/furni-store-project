import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsAction } from '../features/products/products';

let timeoutId;
let initialTyping = true;
const useDebounceInput = () => {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);

  const debounceInput = (debounceType, input) => {
    clearTimeout(timeoutId);
    if (debounceType === 'searchName') {
      if (initialTyping === true) {
        setIsSearching(true);
        initialTyping = false;
      }
    }

    timeoutId = setTimeout(() => {
      dispatch(
        productsAction.setFilter({
          type: debounceType,
          value: input,
        })
      );
      if (debounceType === 'searchName') {
        setIsSearching(false);
        initialTyping = true;
      }
    }, 500);
  };

  return { isSearching, debounceInput };
};

export default useDebounceInput;
