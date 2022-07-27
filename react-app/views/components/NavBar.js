import React from "react";

export default function NavBar(){
    return(
        <nav class="navbar">
            <ul class="navbar-nav">
                <li>
                    <a class="navbar-link" href="./home.js">Home</a>
                </li>
                <li>
                    <a class="navbar-link" href="./donate.js">Donate</a>
                </li>
                <li>
                    <a class="navbar-link" href="./about.js">About</a>
                </li>
                <li>
                    <a class="navbar-link" href="./nominate.js">Nominate</a>
                </li>
            </ul>
        </nav>
    )
}

module.exports = NavBar