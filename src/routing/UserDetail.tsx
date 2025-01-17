import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(params, searchParams.get("name"), location);
  return <p>User {params.id}</p>;
};

export default UserDetail;
