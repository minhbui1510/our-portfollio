import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./components/About.tsx";
import ThemeToggle from "./components/ThemeToggle.tsx";
import ThemeSwitcher from "./context/ThemeSwitcher.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <About/>
            <ThemeToggle/>
            <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-8 transition">
                <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">Chuyển đổi giao diện</h1>
                <ThemeSwitcher/>
            </div>
            ≈
        </>
    )
}

export default App
