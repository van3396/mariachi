import {useState} from 'react'

export default function Index() {
    const [lang, setLang] = useState("en");

    const onLangChange = (newLang) => {
        return () => {
            if(lang !== newLang){
                console.log('setstate')
                setLang(newLang)
            } 
        }
    }
    const switcher = (lang, a, b) => lang === "en" ? a : b;
    return [lang, onLangChange, switcher]
}
