import { NavLink } from "react-router-dom"
import heb from "../../public/img/heb1.png"
import eng from "../../public/img/eng1.png"

export function AppHeader({ selected, setSelected }) {
    return (
        <header className="app-header">
            <nav className={(selected === 'eng') ? 'eng' : ''}>
                <button className={`language-btn ${(selected === 'heb') ? 'selected' : ''}`} onClick={() => setSelected('heb')}>
                    <img src={heb} alt="" />
                </button>
                <button className={`language-btn ${(selected === 'eng') ? 'selected' : ''}`} onClick={() => setSelected('eng')}>
                    <img src={eng} alt="" />
                </button>
            </nav>
        </header>
    )
}