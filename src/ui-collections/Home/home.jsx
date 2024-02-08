import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Toast from '../toast/toast';

const Home = () => {
    const [showToast, setShowToast] = useState(false);
    const location = useLocation();
    const name = location.state.props;
    console.log(`Done by ${name}`)

    useEffect(() => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    }, []);


    return (
        <>
            <h1 className="home"> HEY! {name} <br/><br/>Have a good day:)</h1>
            {showToast && <Toast message={"LOGIN SUCCESSFUL!"}/>}
        </>
    );
};

export default Home;