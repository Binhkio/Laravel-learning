import React from "react";

export default function Detail(dataDetail) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="col-span-2 hover:text-base bg-pink-500 rounded-full text-white hover:bg-[#7928ca] my-2 hover:my-1 h-[44px] font-bold uppercase text-sm px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-black/80 rounded-3xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 rounded-t">
                                    <h3 className="text-3xl pt-4 pl-8  font-bold font-sans ">
                                        {dataDetail.res.res_name}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <img className="rounded-3xl" src={require(`../../uploads/images/${dataDetail.res.res_image}`)} alt="Unknown" />
                                    <p className="my-4 p-4 text-lg leading-relaxed font-mono">
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
