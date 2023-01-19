import React, { useEffect, useState } from 'react'
import "./style.css"
import Cards from './Cards'
import gplayLogo from './logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = () => {

    const [data, setData] = useState([{}]);

    const navigate = useNavigate();
    const handleClick = (element) => {
        console.log(navigate);
        navigate(`/apps/${element.apppackage}`);
        // console.log(element);
    }

    const getAppsWithAxios = async () => {
        const response = await axios.get('http://localhost:8080/apps/');
        setData(response.data);
        // console.log(response.data);
    };
    
    const handleScraping = ()=> {
        axios.post('http://localhost:8080/apps/')
        .then(res => {
            // console.log(res)
        })
    }

    useEffect(() => {
        getAppsWithAxios();
      }, []);

    
    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={gplayLogo} style={{ width: "20rem", position: "relative", left: "38%", cursor: "pointer" }} alt="" onClick={handleScraping}/>
            </div>
            <section className='iteam_section mt-4 container'>
                <div className="container row md-2 d-flex justify-content-between align-items-center">
                    <Cards data={data} onCardClick={(element)=>handleClick(element)} />
                </div>
            </section>
        </>
    )
}

export default Search