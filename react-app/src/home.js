import React from "react";
import NavBar from "./components/NavBar"
// import { Image } from "react-bootstrap"
// const childrenLearningImage = new URL(".../public/children-learning.jpg")

function HomePage(){
    return(
        <div>
            <NavBar />
            {/* <Image className="homepage-image" href={childrenLearningImage} alt="Children Reading" />      */}
        </div>
        

    )
}

export default HomePage