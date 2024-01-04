import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./Pages/Consoles">Consoles</Link>
        </li>
        <li>
          <Link to="./Pages/Games">Games</Link>
        </li>
        <li>
          <Link to="./Pages/Accessories">Accessories</Link>
        </li>
      </ul>
    </div>
  );
}
