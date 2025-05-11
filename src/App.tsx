import './App.css'
import Translate from "./components/Translate.tsx";
import ThemeSwitcher from "./context/ThemeSwitcher.tsx";
import {useTranslation} from "react-i18next";

function App() {
    const {t} = useTranslation()

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl text-bold  text-[var(--text)]">{t('MyPortfolio')}</h1>
                <Translate/>
            </div>
            {/*<DarkLightToggle/>*/}
            {/*<div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-8 transition">*/}
            {/*    <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">Chuyển đổi giao diện</h1>*/}
            <ThemeSwitcher/>
            {/*</div>*/}
            ≈
        </>
    )
}

export default App
