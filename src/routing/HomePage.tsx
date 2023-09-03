import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to="/users">Users</Link>
      <Link to="/contact" className="ms-1">Contact</Link>
    </>
  );
};

export default HomePage;
