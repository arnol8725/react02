import React, { Component } from 'react';

const Noticia = ({noticia}) => {
    //Extrar los datos 
    const {urlToImage,url,title,description,source} = noticia
    return (  
            <div className="col s12 m6 l4">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                </div>
            </div>
    );
}
 
export default Noticia;