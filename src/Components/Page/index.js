import Header from '../Header';
import Main from '../Main';
import useForecast from '../../hooks/useForecast';
import Loader from '../Loader';
import Error from '../Error';
import Forecast from '../Forecast';

const Page=()=>{
    const {isError,isLoading,isForecast,submitRequest}=useForecast();

    const onSubmit=(value)=>{
        submitRequest(value);
    }
    return (
      <>
      <Header/>
    {!isLoading && <Main submitSearch={onSubmit}/>}
    {isError && <Error message={isError}/>}
    {isLoading && <Loader/>}
    {isForecast && <Forecast/>}
      </>
    );
}

export default Page;