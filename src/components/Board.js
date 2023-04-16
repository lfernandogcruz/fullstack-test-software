import { useContext } from 'react';
import QueryContext from '../context/QueryContext';

function Board() {
  const { content } = useContext(QueryContext);

  return (
    content.length === 0
      ? <p>Nothing to show</p>
      : content.map((item) => (
        <div key={item.link}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button
            type="button"
            onClick={() => {
              window.open(item.link, "_blank");
            }}
          >
            Ir a web
          </button>
        </div>
      ))
  );
}

export default Board;