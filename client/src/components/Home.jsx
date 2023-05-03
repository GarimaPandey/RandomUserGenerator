import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #99ff99, #00cc66)"
      }}
    >
      <div className="text-center">
        <h1 className="mb-5"><b>Welcome to Random User Generator App</b></h1>
        <p><b>Random user data is consumed via a API seeded into the database
          Click below and check out more information <br />
          on each user with pagination and search, filter by First name and Last name, Also you can revisit the last clicked User</b> </p>
        <Link to="/user" className="btn btn-primary">
          View Random Users Here!
        </Link>
      </div>
    </div>
  );
}
