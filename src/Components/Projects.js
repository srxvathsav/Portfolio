import React from 'react'
import "./Projects.css"
import { useState, useEffect, useMemo } from 'react';
import Card from './Card'

export default function Projects() {
    const [data, setData] = useState([])
    const getData = () => {
        fetch('projects.json', {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((myData) => {
                setData(myData.projects)
                console.log(myData.projects);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const memoizedProjects = useMemo(() => {
        return data.map((val) => (
            < Card
                key={Date.now()} // Assuming your data has a unique identifier like an 'id'
                title={val.title}
                desc={val.desc}
                link={val.link}
                isHosted={val.isHosted}
                demo={val.demo}
            />
        ));
    }, [data]);


    return (
        <div id='projects' className='main-p'>
            <div className='heading'>
                <h1>PROJECTS</h1>
            </div>
            <hr></hr>
            <div className='projects'>
                {memoizedProjects}
            </div>
        </div>
    )
}




