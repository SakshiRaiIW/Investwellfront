import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import Toast from '../toast/toast';

const Home = () => {
    const [showToast, setShowToast] = useState(false);
    const [userData, setUserData] = useState(null);
    const location = useLocation();
    const name = location.state.props;
    console.log(`Done by ${name}`);

    useEffect(() => {
        handleUser();
    }, []);

    const handleUser = () => {
        axios.get('http://localhost:8000/home', { withCredentials: true })
            .then(response => {
                const data = response.data[0];
                if (response.data === "user logged out") {
                    // Redirect the user to the login page or display a message
                    console.log("User logged out");
                } else {
                    setUserData(data);
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 5000);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <>
            <h1 className="home">HEY! {name} <br /><br />Have a good day :)</h1>
            {userData && (
                <div>
                    <p>User Data:</p>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )}
            <button className="showBtn" onClick={handleUser}>SESSION CHECK</button>
            {showToast && <Toast message={"LOGIN SUCCESSFUL!"} />}
        </>
    );
};

export default Home;




// import React, { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
// import Toast from '../toast/toast';

// const Home = () => {
//     const [showToast, setShowToast] = useState(false);
//     const location = useLocation();
//     const name = location.state.props;
//     console.log(`Done by ${name}`)

//     useEffect(() => {
//         setShowToast(true)
//         setTimeout(() => {
//             setShowToast(false);
//         }, 5000);
//     }, []);


//     return (
//         <>
//             <h1 className="home"> HEY! {name} <br/><br/>Have a good day:)</h1>
//             <button className = "showBtn" onClick={handleUser}>check user</button>
//              <div id='showData'></div>
//             {showToast && <Toast message={"LOGIN SUCCESSFUL!"}/>}
//         </>
//     );
// };

// export default Home;