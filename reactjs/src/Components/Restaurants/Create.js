import React, { useEffect, useState } from "react";
import axios from "axios";
import {restaurantApiUrl} from "../../Context/constants";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

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
        fData.append('image', image);
        fData.append('_token', localStorage.getItem("_token"));

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
        <NavBar />
        <div>
            <form className="">
                <div className="mt-10">
                    <p className="text-2xl font-medium">Restaurant's name</p>
                    <input className="rounded-lg" type="text" name="name" value={newRestaurants.name} onChange={ (e) => {setNewRestaurants({...newRestaurants, name:e.target.value})} } placeholder=" Restaurant's name..." />
                </div>
                <br/>
                <div>
                    <p className="text-2xl font-medium">Description</p>
                    <textarea rows="5" cols="30" name="description" value={newRestaurants.description} onChange={ (e) => {setNewRestaurants({...newRestaurants, description:e.target.value})}}  placeholder=" Description..."></textarea>
                </div>
                <div>
                    <p className="text-2xl font-medium">Image</p>
                    <input id="img" className="rounded-lg" type="file" name="image" onChange={ (e) => setImage(e.target.files[0]) } />
                </div>
                <button className="w-32 p-4 m-4 bg-cyan-300 hover:bg-indigo-300 ease-in-out duration-300 rounded-full hover:scale-110" type="submit" onClick={ createSubmit } >Create</button>
            </form>
        </div>
        </>
    );
};

export default Create;