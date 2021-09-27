import {useRef} from 'react';

const BOUNCE_RATE = 2000;

export const useDebounce = (bounceMilliseconds: number = BOUNCE_RATE) => {
  const busy = useRef(false);

  const debounce = async (callback: Function) => {
    setTimeout(() => {
      busy.current = false;
    }, bounceMilliseconds);

    if (!busy.current) {
      busy.current = true;
      callback();
    }
  };

  return [debounce];
};
