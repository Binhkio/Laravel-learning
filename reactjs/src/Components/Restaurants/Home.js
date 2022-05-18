import React, { useEffect, useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";
import Detail from "./Detail";
import Footer from "../Footer";

const Home = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    const [nickname, setNickname] = useState([]);

    useEffect(() => {
        async function getAllIndex(){
            try {
                const response = await axios.get(`${restaurantApiUrl}/index`);
                if (response.status === 200) {
                    setNickname(response.data.nickname);
                    setAllRestaurants(response.data.restaurants);
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
        <div className="grid grid-cols-3 gap-8 mt-12 m-4">
        {allRestaurants && allRestaurants.map((res, idx) => (
                <div key={idx} className={`text-fuchsia-300 rounded-3xl w-full p-[5px] bg-gradient-to-r from-[#7928ca] to-[#ff0080] `}>
                    <div className="h-full bg-black rounded-3xl p-4">
                        <div className="px-12 py-4 text-3xl font-bold font-sans ">{res.res_name}</div>
                        <div className="p-6 h-[350px]">
                            <img className="rounded-3xl min-w-[490px] h-full object-cover" src={require(`../../uploads/images/${res.res_image}`)} alt="Unknown" />
                        </div>
                        <div className="text-right italic font-bold text-lg tracking-wider font-serif">Created by {nickname[idx]}</div>
                        <div className="grid grid-cols-4 gap-4 items-center m-4">
                            <div></div>
                            <Detail res={res} name={nickname[idx]} />
                            <div></div>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
        <Footer/>
        </>
    );
};

export default Home;