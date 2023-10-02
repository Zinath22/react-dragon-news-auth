// import React from 'react';

import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {/* <h2 className="text-2xl font-poppins font-bold ">This is home page</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                    </div>

                <div className="border md:col-span-2">
                    <h2 className="text-4xl ">News coming soon...</h2>
                </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                    
                    </div>
            </div>
        </div>
    );
};

export default Home;