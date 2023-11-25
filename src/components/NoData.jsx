import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

const NoData = () => {
    return (
        <>
            <h1>No Invoice Selected</h1>
            <div className="d-flex align-items-center">
                <BiArrowBack size={18} />
                <div className="fw-bold mt-1 mx-2 cursor-pointer">
                    <Link to="/">
                        <h5>Go Back</h5>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NoData