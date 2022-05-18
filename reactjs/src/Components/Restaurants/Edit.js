import axios from "axios";
import React, { useState } from "react";
import { imagesUrl, restaurantApiUrl } from "../../Context/constants";

export default function Edit(dataEdit) {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        res_name : dataEdit.res.res_name,
        res_description : dataEdit.res.res_description,
        res_image : dataEdit.res.res_image,
        nickname : dataEdit.name
    });


    const updateData = async (event) => {
        event.preventDefault();
        const fData = new FormData();
        fData.append('name', data.res_name);
        fData.append('description', data.res_description);
        fData.append('image', data.res_image);
        try{
            const response = await axios.post(`${restaurantApiUrl}/update/${dataEdit.res.id}/${localStorage.getItem('_token')}`, fData);
            if(response.status === 200){
                setShowModal(false);
            }
        }
        catch(err){
            alert(err);
        }
    }

    const deleteData = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.delete(`${restaurantApiUrl}/delete/${dataEdit.res.id}/${localStorage.getItem('_token')}`);
            if(response.status === 200){
                setShowModal(false);
            }
        }
        catch(err){
            alert(err);
        }
    }

    return (
        <>
            <button
                className="bg-pink-500 rounded-full text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Edit
            </button>

            {showModal ? (
                <>
                    <form 
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Restaurant's name
                                        <input className="outline-none border-b-4 border-solid border-cyan-400" type="text" name="res_name" value={data.res_name} onChange={(e)=>setData({...data, res_name:e.target.value})} />
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <img className="max-h-600px max-w-400px" src={require(`${imagesUrl}${data.res.res_image}`)} alt="Unknown" />
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Description
                                    </p>
                                    <input className="outline-none border-b-4 border-solid border-cyan-400" type="text" name="res_name" value={data.res_description} onChange={(e)=>setData({...data, res_description:e.target.value})} />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center gap-2 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent active:bg-slate-100 rounded-full font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={deleteData}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={updateData}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form >
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
