import { CircularProgress } from "@mui/material";
import React, {Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Auth = lazy(() => import('./view/auth'))
const Register = lazy(() => import('./view/auth/register'))
const Home = lazy(() => import('./view/Home'))




const RoutesPath = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress/></div>}>
            <Routes>
                <Route exact path="/" element={<Auth/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route exact path="/vehicles" element={<Home/>}/>
            </Routes>
        </Suspense>
    </Router>
)
export default RoutesPath