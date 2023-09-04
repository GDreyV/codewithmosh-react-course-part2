import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  console.warn("My error", error);
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>Oops...</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    );
  }

  return (<>
  <p>Something went wrong</p>
  </>);
};

export default ErrorPage;
