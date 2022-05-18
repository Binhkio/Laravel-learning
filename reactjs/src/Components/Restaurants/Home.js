import React, { useEffect, useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import Modal from './Modal';
import NavBar from "../NavBar";

const Home = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    const [nickname, setNickname] = useState([]);

    useEffect(() => {
        async function getAllIndex(){
            try {
                const response = await axios.get(`${restaurantApiUrl}/index`);
                if (response.status === 200) {
                    // console.log(response.data.nickname);
                    setAllRestaurants(response.data.restaurants);
                    setNickname(response.data.nickname);
                } else alert(response.data);
            } catch (e) {
                alert(e);
            }
        }
        getAllIndex();
    }, []);


    return (
        <>  
            <NavBar />
            <div id="res" className="grid grid-cols-2 gap-8 ">
                
            {allRestaurants && allRestaurants.map((res, idx) => {
                return (
                    <div key={idx} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl ">
                        <div>ID: {idx+1}</div>
                        <div>Name: {res.res_name}</div>
                        <img src={require(`../../uploads/images/${res.res_image}`)} alt="Unknown" />
                        <div>Created by :{nickname[idx]}</div>
                        <div className="flex justify-center items-center m-4">
                            <Modal res={res} name={nickname[idx]} />
                        </div>
                    </div>
                )}
                )}
            </div>
        </>
    );
};

export default Home;