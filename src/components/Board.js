import { useContext } from 'react';
import QueryContext from '../context/QueryContext';
import ProductCard from './ProductCard';

function Board() {
  const { content } = useContext(QueryContext);

  return (
    content.length === 0
      ? <p>Nothing to show</p>
      : content.map((item, index) => (
        <ProductCard data={item} index={index} key={index} />
      ))
  );
}

export default Board;