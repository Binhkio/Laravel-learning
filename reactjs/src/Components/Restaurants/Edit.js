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
            alert(err);
        }
    }

    const deleteData = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.delete(`${restaurantApiUrl}/delete/${dataEdit.res.id}/${localStorage.getItem('_token')}`);
            if(response.status === 200){
                window.location.reload();
            }
        }
        catch(err){
            // alert(err);
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
                                    <div className="grid grid-cols-2 gap-2">
                                        <h3 className="text-3xl font-semibold">Restaurant's name</h3>
                                        <input className="outline-none text-xl border-b-4 border-solid border-cyan-400" type="text" name="res_name" value={data.res_name} onChange={(e)=>setData({...data, res_name:e.target.value})} />
                                    </div>
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
                                <div className="relative p-6 text-xl grid grid-rows-10 gap-8 max-h-600px max-w-400px">
                                    <div className="row-span-5">
                                        <img className="p-4 bg-center" src={require(`../../uploads/images/${data.res_image}`)} alt="Unknown" />
                                        <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])}/>
                                    </div>
                                    <div className="row-span-5 ">
                                        <p className="my-4 text-black text-2xl leading-relaxed">
                                            Description
                                        </p>
                                        <textarea className=" outline-none w-full border-b-4 border-solid border-cyan-400" rows="5" name="res_name" value={data.res_description} onChange={(e)=>setData({...data, res_description:e.target.value})}></textarea>
                                    </div>
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
