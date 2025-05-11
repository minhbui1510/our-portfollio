import {useTranslation} from 'react-i18next'

export default function Translate() {
    const {t, i18n} = useTranslation()

    return (
            <div className="flex gap-2 items-center">
                <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 rounded bg-[var(--bg)] text-[var(--text)]">
                   🇬🇧 English
                </button>
                <button onClick={() => i18n.changeLanguage('vi')} className="px-2 py-1 rounded bg-[var(--bg)] text-[var(--text)]">
                   🇻🇳 Tiếng Việt
                </button>
        </div>
    )
}

