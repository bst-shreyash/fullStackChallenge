import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import { useParams } from "react-router-dom";
import gplayLogo from './logo.png'
import axios from "axios";
import AppScreen from "./AppScreen";

const AppDetail = () => {
    
    let { id } = useParams();
    const [data, setData] = useState({});
    const getAppWithAxios = async () => {
        const response = await axios.get(`http://localhost:8080/apps/?app_id=${id}`);
        setData((response.data)[0]);
    };

    useEffect(() => {
        getAppWithAxios();
    }, []);

    if (!Object.keys(data).length) return <div>Loading.....</div>

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={gplayLogo} style={{ width: "20rem", position: "relative", left: "38%", cursor: "pointer" }} alt="" />
            </div>
            <div className="container justify-content-between align-items-center">
                <Card style={{ width: '18rem', border: "none" }} className="container mb-4 align-items-center">
                    <Card.Img variant="top" className='cd' src={data.appimg} style={{ width: '12rem', height: '12rem' }} />
                </Card>


            <div className="col-lg-12">
            <div className="container">
                    <h3>App Name</h3>
                    <p>{data.appname}</p>
                </div>
            <div className="container">
                    <h3>Package</h3>
                    <p>{data.apppackage}</p>
                </div>
                <div className="container">
                    <h3>Developer</h3>
                    <p>{data.developer}</p>
                </div>
                <div>
                    <h3>Rating</h3>
                    <span>{data.rating}&nbsp;★</span>
                </div>
            </div>
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    <h3>App Screenshots</h3>
                    <AppScreen data={data.screenshots}/>
                </div>
            </div>
        </>
    )
}

export default AppDetail