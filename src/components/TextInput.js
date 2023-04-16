import { useContext } from "react";
import QueryContext from "../context/QueryContext";

function TextInput() {
  const { setSearch } = useContext(QueryContext);

  return (
    <div className="text-input">
      <input
        type="text"
        placeholder="O que você procura?"
        onChange={(event) => {
          const { value } = event.target;
          setSearch(value);
        }}
      />
    </div>
  );
}

export default TextInput;
