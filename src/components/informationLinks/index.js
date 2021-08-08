import React from 'react'
import style from "./index.module.css";
// import mariachi from "../../media/images/mariachi.jpg"

const index = () => {
    return (
        <div className={`${style.main}`}>
            <div className={`${style.links}`}>
                <div>
                    <a href="#first">
                    About Us

                    </a></div>
                <div>
                    <a href="#second">
                    services
                    </a></div>
                <div>
                    <a href="#third">
                    contact us
                    </a></div>
            </div>
        </div>
    )
}

export default index
