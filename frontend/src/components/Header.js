import { useContext } from "react";
import QueryContext from "../context/QueryContext";
import scrappers from "../../../../backend/utils/functions";
import Select from "./Select";
import TextInput from "./TextInput";

function Header() {
  const { source, category, search, setContent } = useContext(QueryContext);

  return (
    <header className="App-header">
      <Select type="source" />
      <Select type="category" />
      <TextInput />
      <button
        type="button"
        onClick={() => {
          console.log("source ->", source);
          console.log("category ->", category);
          console.log("search ->", search);
          setContent(scrappers[source](category, search));
        }}
      >
        Search
      </button>
    </header>
  );
}

export default Header;
