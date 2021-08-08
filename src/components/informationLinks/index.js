import React from 'react'
import style from "./index.module.css";
import langHook from '../../hooks/LangSwitcher/index'

const Index = () => {
    const [,,switcher] = langHook();
    return (
        <div className={`${style.main}`}>
            <div className={`${style.links}`}>
                <div>
                    <a href="#first">
                        {switcher('About Us', 'spanish')}
                    </a></div>
                <div>
                    <a href="#second">
                        {switcher('services', 'spanish')}
                    </a></div>
                <div>
                    <a href="#third">
                        {switcher('contact us', 'spanish')}
                    </a></div>
            </div>
        </div>
    )
}

export default Index
