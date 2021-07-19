/**
 * Input.tsx
 * Input for symbols.
 */

// Node Modules
import {useEffect} from 'react';
import {useSelector} from 'react-redux';


import {useSymbolsAPI} from '../hooks';

export default function Input() {
  // Hooks
  const {get} = useSymbolsAPI();
  const symbolsAll = useSelector(({symbols}) => symbols.all);

  useEffect(() => {
    get();
  }, [get]);

  const symbolsJSX = Object.keys(symbolsAll).map((symbol) => (
    <li key={symbol}>{symbol}</li>
  ));

  return (
    <ul>
      {symbolsJSX}
    </ul>
  );
}