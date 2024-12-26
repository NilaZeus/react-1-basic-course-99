import "./styles.css";

let language = "React JS";

function Header(props) {
  return (
    <header>
      <h1>My Name is {props.name}</h1>
      <p>Copyright on {props.year}</p>
    </header>
  );
}

export default function App() {
  return (
    <div>
      <Header name="Nilanjan" year={2024} />
      <h1>Hii all</h1>
    </div>
  );
}
