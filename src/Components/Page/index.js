import Header from "../Header";
import Main from "../Main";
import useForecast from "../../hooks/useForecast";
import Loader from "../Loader";
import Error from "../Error";
import Forecast from "../Forecast";

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <>
      <Header />
      {!forecast && (
        <section>
          {!isLoading && <Main submitSearch={onSubmit} />}
          {isError && <Error message={isError} />}
          {isLoading && <Loader />}
        </section>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </>
  );
};

export default Page;
