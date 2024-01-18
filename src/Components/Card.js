import React from 'react'
import "./Card.css"
import gitLogo from "../assets/gitlogo.png"


export default function Card({ title, desc, link, isHosted, demo }) {
    return (
        <>
            {console.log(isHosted + title)}
            <div className="card" >
                <img className="card-img-top" src={gitLogo} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="buttons">
                        <a href={link} className="btn btn-primary btn-sm" target='_blank' rel="noreferrer">Github</a>
                        {/* {isHosted ? <a href={demo} className="btn btn-primary btn-sm btn-">Demo</a> : <></>} */}
                    </div>
                </div>
            </div>
        </>
    )
}
