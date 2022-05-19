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
        <NavBar curPage={2} />
        <div className="grid grid-cols-3 gap-12 mt-12 mx-8 items-center">
        {allRestaurants && allRestaurants.map((res, idx) => {        
            return (
            <div key={idx} className="py-4">
            <div className="p-4 hover:text-fuchsia-100 hover:text-4xl text-fuchsia-200 rounded-3xl text-3xl h-fit w-full bg-gradient-to-r from-[#7928ca]/80 to-[#ff0080]/80 hover:bg-gradient-to-r hover:from-[#7928ca]/95 hover:to-[#ff0080]/95 hover:shadow-xl hover:shadow-purple-500/70 duration-150">
                <div className="h-full rounded-3xl p-4 hover:shadow-xl ">
                    <div className="px-12 py-4 font-bold font-sans ">{res.res_name}</div>
                    <div className="flex justify-center pb-4">
                    <div className="p-4 w-[490px] flex justify-center place-content-center h-[350px]">
                        <img className="rounded-3xl shadow-xl shadow-[#7928ca]/50 w-max h-full object-cover object-center" src={require(`../../uploads/images/${res.res_image}`)} alt="Unknown" />
                    </div>
                    </div>
                    <div className="flex justify-center gap-4 items-center m-4">
                        <Detail res={res} />
                        <Edit res={res} />
                    </div>
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