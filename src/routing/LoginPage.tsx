import { useSearchParams } from "react-router-dom";
import useAuth from "../state-management/auth/useAuth";

const LoginPage = () => {
  const [ searchParams ] = useSearchParams();
  console.log();
  return <div>
    Login { decodeURIComponent(searchParams.get("return") ?? "") }
    </div>;
};

export default LoginPage;
