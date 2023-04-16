import Select from "./Select";
import TextInput from "./TextInput";

function Header() {
  return (
    <header className="App-header">
      <Select type="source" />
      <Select type="category" />
      <TextInput />
    </header>
  );
}

export default Header;
