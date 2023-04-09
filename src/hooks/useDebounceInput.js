import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsAction } from '../features/products/products';

let timeoutId;
let intialChange = true;
const useDebounceInput = () => {
  const dispatch = useDispatch();
  const [isChanging, setIsChanging] = useState(false);

  let inputType;
  const debounceInput = (debounceType, input) => {
    clearTimeout(timeoutId);
    if (intialChange === true) {
      setIsChanging(true);
      intialChange = false;
    }

    timeoutId = setTimeout(() => {
      dispatch(
        productsAction.setFilter({
          type: debounceType,
          value: input,
        })
      );
      setIsChanging(false);
      intialChange = true;
    }, 500);
  };

  return { isChanging, debounceInput };
};

export default useDebounceInput;
