import { CircularProgress } from "@mui/material";
import React, {Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./view/Home";


const RoutesPath = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress/></div>}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Suspense>
    </Router>
)
export default RoutesPath