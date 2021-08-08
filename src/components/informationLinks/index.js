import React from 'react'
import style from "./index.module.css";
// import mariachi from "../../media/images/mariachi.jpg"

const index = () => {
    return (
        <div className={`${style.main}`}>
            <div className={`${style.links}`}>
                <div>About Us</div>
                <div>services</div>
                <div>contact us</div>
            </div>
        </div>
    )
}

export default index
