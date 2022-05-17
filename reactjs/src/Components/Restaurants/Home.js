import React, { useEffect, useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";

const Home = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`${restaurantApiUrl}/index`);
            console.log(response.data);
            if (response.status === 200) {
                console.log(response.data);
                setAllRestaurants(response.data.restaurants);
            } else alert(response.data);
        } catch (e) {
            alert(e);
        }
    }, []);

    return (
        <>
        <NavBar />
        <div className="grid grid-cols-2 gap-8 ">
        {allRestaurants && allRestaurants.map((res, idx) => (
            <div key={idx} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl ">
                <div>ID: {idx+1}</div>
                <div>Name: {res.res_name}</div>
                <div>Description: {res.res_description}</div>
                <img className="text-center" src={res.res_image} alt="Unknown" />
                {/* <div>Last change: {res.updated_at}</div> */}
                
            </div>
            ))}
        </div>
        </>
    );
};

export default Home;