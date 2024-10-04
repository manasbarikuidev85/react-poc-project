import React from "react";
import useFetch from "./CustomHook";


function DataFetching(){
    const {data, loading}=useFetch('https://jsonplaceholder.typicode.com/users');
    if(loading)return <p>Loading...</p>
    if(!data)return <p>No Data available...</p>

    return(
        <>
    <h5>DataFetching Example</h5>
{data.map(()=>(
    <div key={user.id}>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
))}

        </>
    )

}
export default DataFetching;