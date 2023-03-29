import React, { useState, useEffect } from 'react'
import axios from 'axios'

const News = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2b43e0a85ea1462ba7d54b374bdbe06b")
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles);
            })
    }, [])
    return (


        <>


            <div className="container my-5">
                <div className="row text-center">
                   {
                   news.map((val)=>{
                        return (
                            <div className="col my-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={val.urlToImage} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{val.title}</h5>
                                        <p className="card-text">{val.description}</p>
                                        {/* <button className="btn btn-primary">
                                          
                                        </button> */}
                                        <a href={val.url} >
                                            <button className="btn btn-primary">
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        )
                   })
                   }
                </div>
            </div>


        </>
    )
}

export default News