import {useContext} from 'react'
import {Context} from "../../context/index"

export default function Index() {
    const {store:{lang}, actions:{setLang}} = useContext(Context)
    console.log(`Set Language: '${lang}'`)
    const onLangChange = (newLang) => {
        return () => {
            if(lang !== newLang){
                setLang(newLang)
            } 
        }
    }
    const switcher = (a, b) => lang === "en" ? a : b;
    return [lang, onLangChange, switcher]
}
