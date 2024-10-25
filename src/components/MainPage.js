import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";

const MainPage = () => {
    return (
        <React.Fragment>

            <div className="main-wrapper">
                <Header/>
                <Sidebar/>
                <div className="page-wrapper">
                    <div className="content">
                        <NavPage/>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default MainPage;