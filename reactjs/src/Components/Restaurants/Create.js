import React, { useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const Create = () => {
    const [newRestaurants, setNewRestaurants] = useState({
        name:"",
        description:"",
    });
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    const createSubmit = async (event) => {
        event.preventDefault();

        const fData = new FormData();
        fData.append('name', newRestaurants.name);
        fData.append('description', newRestaurants.description);
        fData.append('_token', localStorage.getItem("_token"));
        fData.append('image', image);

        console.log(typeof fData, fData);
        try{
            const response = await axios.post(`${restaurantApiUrl}/store`, fData);
            if(response.status === 200){
                navigate('/home');
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <NavBar curPage={3} />
        <div className="w-screen h-[80vh] flex justify-center items-center backdrop-blur-md">
        <div className={`text-fuchsia-200 h-[96%] mt-16 text-center rounded-3xl p-4 bg-gradient-to-r from-[#7928ca]/80 to-[#ff0080]/80 shadow-2xl shadow-[#bc28ca]`}>
            <div className=" rounded-3xl grid grid-rows-8 p-4 shadow-lg shadow-black/20">
                <div className="px-8 py-6 row-span-2 font-bold text-3xl">
                    <p className="font-medium p-4">Restaurant's name</p>
                    <input className="rounded-xl focus:scale-105 hover:scale-105 duration-150 px-6 border-b-2 border-purple-500/90 shadow-lg shadow-black/30 text-3xl bg-transparent outline-none p-2 text-center" type="text" name="name" value={newRestaurants.name} onChange={ (e) => {setNewRestaurants({...newRestaurants, name:e.target.value})} } placeholder="Type here.." />
                </div>
                <div className="px-8 py-6 row-span-2 font-bold text-3xl">
                    <p className="row-span-4 font-medium p-2">Description</p>
                    <textarea className="rounded-xl focus:scale-105 hover:scale-105 duration-150 px-6 border-b-2 border-purple-500/90 shadow-xl shadow-black/30 text-3xl bg-transparent outline-none p-2 text-left" rows="5" cols="30" name="description" value={newRestaurants.description} onChange={ (e) => {setNewRestaurants({...newRestaurants, description:e.target.value})}}  placeholder="Type here..."></textarea>
                </div>
                <div  className="px-8 py-6 row-span-2 font-bold text-3xl grid grid-cols-3">
                    <p className="font-medium text-3xl">Image</p>
                    <input className="block self-center text-xl col-span-2 ml-6 w-10/12 shadow-lg shadow-black/30 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" name="image" onChange={ (e) => setImage(e.target.files[0]) } />
                </div>
                <div className="px-8 py-6">
                    <button className=" text-xl text-white font-bold w-32 p-4 shadow-lg shadow-black/30 bg-green-500 hover:bg-green-500/90 ease-in-out duration-150 rounded-full hover:scale-110" type="submit" onClick={ createSubmit } >Create</button>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Create;