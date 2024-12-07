import React from "react";

const ModalWrapper = ({ isOpen, onClose, children, title }) => {
    const handleClose = () => {
        onClose(!isOpen);
    };
    return (
        <div
            className={`${
                isOpen ? "opacity-1 visible" : "opacity-0 invisible"
            } fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 bottom-0 flex justify-center items-center bg-black/30`}
        >
            <div className="bg-white rounded-md min-w-[500px] p-4">
                <div className="flex mb-4">
                    <h2 className="text-xl">{title}</h2>
                    <button className="ms-auto" onClick={handleClose}>
                        <i className="fa fa-close text-xl"></i>
                    </button>
                </div>
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default ModalWrapper;
