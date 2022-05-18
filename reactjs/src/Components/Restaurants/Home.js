import React, { useEffect, useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";
import Detail from "./Detail";
import { borderColors } from "../../Context/constants";

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
                }
            } catch (e) {
                // alert(e);
            }
        }
        getAllIndex();
    }, []);


    return (
        <>  
            <NavBar />
            <div id="res" className="grid grid-cols-3 gap-8 mt-12 m-4">
                
            {allRestaurants && allRestaurants.map((res, idx) => {
                return (
                    <>
                        <div key={idx} className={`text-fuchsia-300 z-10 backdrop-blur-md tracking-wide p-4 border-2 ${borderColors[Math.floor(Math.random()*borderColors.length)]} rounded-3xl `}>
                            <div className="px-8 py-4 text-3xl font-bold">{res.res_name}</div>
                            <div className="flex h-[400px] p-4 ">
                                <img className={`rounded-2xl max-h-fit object-cover`} src={require(`../../uploads/images/${res.res_image}`)} alt="Unknown" />
                            </div>
                            <div className="text-right text-xl font-bold p-4">Created by {nickname[idx]}</div>
                            <div className="flex  justify-center items-center m-4">
                                <Detail res={res} name={nickname[idx]} />
                            </div>
                        </div>
                    </>
                )}
                )}
            </div>
        </>
    );
};

export default Home;