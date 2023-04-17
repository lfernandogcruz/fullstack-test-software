import { useContext } from "react";
import QueryContext from "../context/QueryContext";
import { categories, sources } from "../utils/constants";

function Select(props) {
  const { type } = props;
  const options = type === "category" ? categories : sources;
  const { setCategory, setSource } = useContext(QueryContext);

  const onChange = (event) => {
    const { value } = event.target;
    type === "category" ? setCategory(value) : setSource(value);
    }

  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option[0]} value={option[0]}>
          {option[1].name}
        </option>
      ))}
    </select>
  );
}

export default Select;
