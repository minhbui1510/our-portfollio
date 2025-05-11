import {useTranslation} from 'react-i18next'

export default function About() {
    const {t, i18n} = useTranslation()

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">{t('welcome')}</h1>
            <p className="mt-2">{t('description')}</p>

            <div className="mt-4 flex gap-2">
                <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 bg-gray-200 rounded">
                    English
                </button>
                <button onClick={() => i18n.changeLanguage('vi')} className="px-2 py-1 bg-gray-200 rounded">
                    Tiếng Việt
                </button>
            </div>
        </div>
    )
}
