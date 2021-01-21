import React from 'react'
import { Link } from 'react-router-dom'
export const Home = ()=>{
    const handleClick = ()=>{}
    return (
        <div>
            <h1>Product App is Rendered</h1>
            <img src={"http://localhost:8081/images/img.jpg"} height="100" width="100"/>
            <input type="button" value="show price" onClick={handleClick}/>
            <div><Link to="/v2">render v2 version</Link></div>
        </div>
    )
}

export default Home;