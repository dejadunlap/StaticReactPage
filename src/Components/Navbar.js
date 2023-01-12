import React from "react"
import { FaReact } from "react-icons/fa";

export default function Navbar () {
    return(
        <nav className = "nav">
            <FaReact color="#00D8FF" size={50}/>
            <h1> ReactFacts </h1>
            <h2> React Course - Project 1</h2>
        </nav>
    )
}