import React, { useEffect, useState } from "react";


const countries = [
    { name: 'India', value: 'IN', cities: ['Delhi', 'Mubai'] },
    { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
    { name: 'Banaladesh', value: 'BG', cities: ['Dhaka', 'Chittago'] },
];
const CityBaseDropdown = () => {

    const [Country, setCountry] = useState([]);
    useEffect(() => {
        console.log(Country[0]);
        console.log(Country[1])

    }, [])


    return (
        <>

            <select
                value={Country}
                onChange={(e) => {
                    console.log(e.target.value);
                    setCountry([e.target.value]);
                }}
            >
                {countries.map((item, index) => {
                    return (
                        <option key={index} value={index}>
                            {item.name}
                        </option>
                    )
                })}

            </select>

            {/* 2nd drop down */}

            <select>
                {countries[Country] &&
                    countries[Country].cities.map((item, index) => {
                        return (
                            <option value={index}>
                                {item}
                            </option>
                        )
                    })
                }
            </select>

        </>
    )

}
export default CityBaseDropdown;