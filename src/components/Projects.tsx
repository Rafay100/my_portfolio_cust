import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../app/style/projects.css'

const data=[
    {
        id: 0,
        title:"Countdown Timer" ,
        desc:"A Next.js & TypeScript powered website to track time with an interactive countdown feature. ",
        img:"/project-1.jpeg" ,
        tags:["Next.js", "Node","CSS", "TypeScript"]
    },
    {
        id: 1,
        title:"Todo List" ,
        desc:"A React & TypeScript based app for manging and organizing your tasks efficiently.",
        img:"/project-2.jpeg" ,
        tags:["React", "Node","CSS", "TypeScript"],
    },
    {
        id: 3,
        title:"Weather Widget" ,
        desc:"A Next.js & TypeScript based tool for fetching and display real-time weather data.",
        img:"/project-3.jpeg" ,
        tags:["Next.js", "Node","CSS", "TypeScript"],
    },
    {
        id: 4,
        title:"Currency Converter" ,
        desc:"A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img:"/project-4.jpeg" ,
        tags:["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 5,
        title:" Static Interactive Resume " ,
        desc:"A TypeScript-based interactive resume build with HTML and CSS, allowing users to showcase their skills dynamically",
        img:"/project-5.png" ,
        tags:["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 6,
        title:"Simple Calculator" ,
        desc:"A basic HTML and TypeScript calculator for permoting essential arithmetic operations.",
        img:"/project-6.png" ,
        tags:["HTML", "Node", "CSS", "TypeScript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='project-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (<Card 
        key={el.id} 
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}




export default Projects



