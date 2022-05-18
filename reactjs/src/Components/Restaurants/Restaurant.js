import React, { useEffect, useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";
import Detail from './Detail';
import Edit from "./Edit";
import Footer from "../Footer";

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
                }
            } catch (err) {
                // alert(err);
            }
        }
        getMyIndex();
    }, []);

    return (
        <>
        <NavBar />
        <div className="grid grid-cols-3 gap-8 mt-12 m-4">
        {allRestaurants && allRestaurants.map((res, idx) => {        
            return (
            <div key={idx} className="text-fuchsia-300 rounded-3xl w-full p-[5px] bg-gradient-to-r from-[#7928ca] to-[#ff0080] ">
                <div className="h-full bg-black rounded-3xl p-4">
                    <div className="px-12 py-4 text-3xl font-bold font-sans ">{res.res_name}</div>
                    <div className="p-6 h-[350px]">
                        <img className="rounded-3xl min-w-[490px] h-full object-cover" src={require(`../../uploads/images/${res.res_image}`)} alt="Unknown" />
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center m-4">
                        <Detail res={res} />
                        <Edit res={res} />
                    </div>
                </div>
            </div>
            )}
        )}
        </div>
        <Footer/>
        </>
    );
};

export default Home;