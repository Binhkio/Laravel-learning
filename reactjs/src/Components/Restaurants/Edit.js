import axios from "axios";
import React, { useState } from "react";
import { restaurantApiUrl } from "../../Context/constants";

export default function Edit(dataEdit) {
    const [showModal, setShowModal] = useState(false);
    
    const [data, setData] = useState({
        res_name : dataEdit.res.res_name,
        res_description : dataEdit.res.res_description,
        res_image : dataEdit.res.res_image,
    });
    const [image, setImage]= useState('');

    const updateData = async (event) => {
        event.preventDefault();
        const fData = new FormData();
        fData.append('name', data.res_name);
        fData.append('description', data.res_description);
        fData.append('image', image);
        try{
            const response = await axios.post(`${restaurantApiUrl}/update/${dataEdit.res.id}/${localStorage.getItem('_token')}`, fData);
            if(response.status === 200){
                setShowModal(false);
            }
        }
        catch(err){
            
        }
    }

    const deleteData = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.delete(`${restaurantApiUrl}/delete/${dataEdit.res.id}/${localStorage.getItem('_token')}`);
            if(response.status === 200){
                // window.location.reload();
            }
        }
        catch(err){
            // alert(err);
        }
    }

    return (
        <>
            <button
                className="col-span-2 hover:text-base bg-pink-500 rounded-full text-white hover:bg-[#7928ca] mt-2 hover:mt-1 h-[44px] font-bold uppercase text-sm px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Edit
            </button>

            {showModal ? (
                <>
                    <form 
                        className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-black/80 rounded-3xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 rounded-t">
                                    <div className="grid grid-cols-4 gap-2">
                                        <div className="text-2xl pt-4 px-8 font-bold italic font-sans">Name: </div>
                                        <input className="col-span-3 pt-4 px-2 outline-none border-b-2 border-cyan-500 text-2xl font-bold font-sans bg-transparent text-yellow-500" type="text" name="res_name" value={data.res_name} onChange={(e)=>setData({...data, res_name:e.target.value})} />
                                    </div>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 text-xl grid grid-rows-10 gap-4 max-h-600px max-w-400px">
                                    <div className="row-span-5">
                                        <img className="p-4 bg-center rounded-3xl" src={require(`../../uploads/images/${data.res_image}`)} alt="Unknown" />
                                        <input className="block ml-6 w-10/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" name="image" onChange={(e)=>setImage(e.target.files[0])}/>
                                    </div>
                                    <div className="row-span-5 ">
                                        <p className="pl-4 py-2 text-2xl font-bold italic leading-relaxed font-mono">Description</p>
                                        <textarea className=" outline-none bg-transparent w-full border-t-2 border-l-2 shadow-inner shadow-cyan-500/90 p-3 border-solid border-purple-500/80 text-slate-100" rows="5" name="res_name" value={data.res_description} onChange={(e)=>setData({...data, res_description:e.target.value})}></textarea>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center gap-2 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                        className="text-red-600 bg-white/90 hover:bg-white/70 rounded-full font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-red-500 text-white hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={deleteData}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
