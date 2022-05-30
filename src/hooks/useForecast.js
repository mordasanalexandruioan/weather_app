import { useState } from "react";
import axios from 'axios';

const BASE_URL='http://api.weatherapi.com/v1/current.json?key=b6d505ab68f4411e8ab124145222505';

const useForecast = () =>{
    const [isError, setError]=useState(false);
    const [isLoading, setLoading]=useState(false);
    const [isForecast, setForecast]=useState(null);

    const getWoeid = async (location)=>{
        const { data } = await axios(`${BASE_URL}`, {params: {query: location}});

        if(!data){
            setError('Location not found');
            setLoading(false);
            return;
        }

        return data;
    }

    const submitRequest = async location=>{
        try {
            setLoading(true);
            setError(false);

            const data = await getWoeid(location);
            const response = await axios(`${BASE_URL}`, {params: {query: location, data}});
            setLoading(false);

            if(!response.data) return;
            if(!data) return;

            console.log({data});

        } catch (error) {
                setError('Location not found');
                setLoading(false);
        }
            
    }       

    return {isError, isLoading, isForecast, submitRequest,};
}

export default useForecast;