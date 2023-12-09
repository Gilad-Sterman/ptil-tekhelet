export function AppHeader({ selected, setSelected }) {

    function onChangeLang(lang) {
        setSelected(lang)
        window.scrollTo(0, 0)
    }
    return (
        <header className="app-header">
            <nav className={(selected === 'eng') ? 'eng' : ''}>
                <button className={`language-btn ${(selected === 'heb') ? 'selected' : ''}`} onClick={() => onChangeLang('heb')}>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700476247/heb1_rmybm6.png" alt="" />
                </button>
                <button className={`language-btn ${(selected === 'eng') ? 'selected' : ''}`} onClick={() => onChangeLang('eng')}>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700476247/eng1_rpfhk8.png" alt="" />
                </button>
            </nav>
        </header>
    )
}