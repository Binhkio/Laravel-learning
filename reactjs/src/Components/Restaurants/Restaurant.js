import React, { useEffect, useState } from "react";
import axios from "axios";
import {imagesUrl, restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";
import Modal from './Modal';
import Edit from "./Edit";

const Home = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        async function getMyIndex(){
            // const fData = new FormData();
            // fData.append('_token', localStorage.getItem("_token"));
            try {
                const response = await axios.get(`${restaurantApiUrl}/my-index/${localStorage.getItem("_token")}`);
                if (response.status === 200) {
                    setAllRestaurants(response.data.restaurants);
                } else alert(response.data);
            } catch (err) {
                alert(err);
            }
        }
        getMyIndex();
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
                <img className="text-center" src={require(`../../uploads/images/${res.res_image}`)} alt="Unknown" />
                <div className="grid grid-cols-2 gap-4 items-center m-4">
                    <Modal res={res} name='' />
                    <Edit res={res} name='' />
                </div>
            </div>
            ))}
        </div>
        </>
    );
};

export default Home;