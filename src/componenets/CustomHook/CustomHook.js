
import React, { useEffect, useState } from 'react';

function useFetch(url){
    const[data, setData]=useState(null);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
    async function fetchData(){
        try{
    const response =await fetch(url);
    const result =await response.json();
    setData(result);

        }catch(error){

        }finally{
           setLoading(false); 
        }
    }
    fetchData();
    },[url]);


    return{data,loading}

}
export default useFetch;