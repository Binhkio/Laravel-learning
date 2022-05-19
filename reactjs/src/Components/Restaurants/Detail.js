import React from "react";

export default function Detail(dataDetail) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="hover:scale-105 shadow-xl shadow-[#7928ca]/30 bg-pink-500 rounded-full text-white hover:bg-[#7928ca] my-2 h-[44px] font-bold uppercase text-sm px-12 py-2 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                More detail
            </button>
            {showModal ? (
                <>
                    <div
                        className=" backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className=" w-auto my-6 mx-auto max-w-3xl bg-black/80 rounded-3xl border-2 border-purple-500 shadow-2xl shadow-purple-500/90">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 rounded-t">
                                    <h3 className="text-3xl pt-4 pl-8 text-fuchsia-500 font-bold font-sans ">
                                        {dataDetail.res.res_name}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6">
                                    <div className=" flex justify-center">
                                        <img className="rounded-3xl shadow-lg shadow-fuchsia-300/40 w-max h-full object-cover object-center" src={require(`../../uploads/images/${dataDetail.res.res_image}`)} alt="Unknown" />
                                    </div>
                                    <p className="my-4 p-4  border-t-2 border-l-2 border-solid border-purple-500/80 rounded-xl mt-8 text-lg leading-relaxed font-mono">
                                        {dataDetail.res.res_description}
                                    </p>
                                    <p className="my-4 text-right italic font-bold text-lg tracking-wider font-serif leading-relaxed">
                                        Create by {dataDetail.name ?? 'You'}
                                    </p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
