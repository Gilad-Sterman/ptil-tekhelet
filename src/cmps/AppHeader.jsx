export function AppHeader({ selected, setSelected }) {
    return (
        <header className="app-header">
            <nav className={(selected === 'eng') ? 'eng' : ''}>
                <button className={`language-btn ${(selected === 'heb') ? 'selected' : ''}`} onClick={() => setSelected('heb')}>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700476247/heb1_rmybm6.png" alt="" />
                </button>
                <button className={`language-btn ${(selected === 'eng') ? 'selected' : ''}`} onClick={() => setSelected('eng')}>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700476247/eng1_rpfhk8.png" alt="" />
                </button>
            </nav>
        </header>
    )
}