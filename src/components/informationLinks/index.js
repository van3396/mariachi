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
                        {switcher('About Us', 'Sobre nosotros')}
                    </a></div>
                <div>
                    <a href="#second">
                        {switcher('services', 'servicios')}
                    </a></div>
                <div>
                    <a href="#third">
                        {switcher('contact us', 'Contacta con nosotros')}
                    </a></div>
            </div>
        </div>
    )
}

export default Index
