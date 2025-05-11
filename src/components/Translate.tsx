import {useTranslation} from 'react-i18next'
import useDevice from "../hooks/useDevice.ts";

export default function Translate() {
    const {t, i18n} = useTranslation()
    const {isMobile} = useDevice();
    return (
        <div className="flex gap-2 items-center">

            <button onClick={() => i18n.changeLanguage('en')}
                    className="px-2 py-1 rounded bg-[rbg(var(--bg))] text-[rbg(var(--text))]">
                🇬🇧 {!isMobile && 'English'}
            </button>
            <button onClick={() => i18n.changeLanguage('vi')}
                    className="px-2 py-1 rounded bg-[rbg(var(--bg))] text-[rbg(var(--text))]">
                🇻🇳 {!isMobile && 'Tiếng Việt'}
            </button>
        </div>
    )
}

