import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function Beaches () {

    const [data,setdata] = useState([]);

    useEffect( () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=16b6ad43400ed21f9f170548f6780418&nojsoncallback=1&safe_search=1&extras=url_m,url_n,url_z,url_c,url_l,url_o&tags=beach&per_page=50`)
        .then((res) => { setdata(res.data.photos.photo)} )
    },[])

    return(
      <>
            {data.map((data, index) => {
                return (
                    <div key={index} className="image-div" >
                        <img height="100px" width={"100px"} src={data.url_c ||
                            data.url_l ||
                            data.url_o ||
                            data.url_z ||
                            data.url_n ||
                            data.url_m} className="images" alt="img" />
                    </div>
                )
            })}
            </>
    )
}

export default Beaches;