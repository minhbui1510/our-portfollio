import './App.css'
import Translate from "./components/Translate.tsx";
import ThemeSwitcher from "./context/ThemeSwitcher.tsx";
import {useTranslation} from "react-i18next";
import Router from "./routes/Router.tsx";

function App() {
    const {t} = useTranslation()

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl text-bold  text-[rgb(var(--text))]">{t('MyPortfolio')}</h1>
                <Translate/>
            </div>
            <ThemeSwitcher/>
            <div className=" mt-2 flex justify-center">
                <Router/>
            </div>
        </>
    )
}

export default App
