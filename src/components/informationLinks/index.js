import React from 'react'
import style from "./index.module.css";
import langHook from '../../hooks/LangSwitcher/index'

const Index = () => {
    const [lang,,switcher] = langHook()
    console.log(lang);

    return (
        <div className={`${style.main}`}>
            <div className={`${style.links}`}>
                <div>
                    <a href="#first">
                        {switcher(lang,'About Us', 'spanish')}
                    </a></div>
                <div>
                    <a href="#second">
                        {switcher(lang,'services', 'spanish')}
                    </a></div>
                <div>
                    <a href="#third">
                        {switcher(lang,'contact us', 'spanish')}

                    </a></div>
            </div>
        </div>
    )
}

export default Index
