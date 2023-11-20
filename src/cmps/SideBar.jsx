import { useEffect, useState } from "react"

export function SideBar() {
    const [activeLink, setActiveLink] = useState('card1')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleScroll() {
        const card1 = document.getElementById('card1')
        const card2 = document.getElementById('card2')
        const card3 = document.getElementById('card3')
        const card4 = document.getElementById('card4')
        const card5 = document.getElementById('card5')
        const card6 = document.getElementById('card6')
        const card7 = document.getElementById('card7')
        const card8 = document.getElementById('card8')
        const card9 = document.getElementById('card9')
        const card10 = document.getElementById('card10')
        const card11 = document.getElementById('card11')
        const card12 = document.getElementById('card12')
        const card13 = document.getElementById('card13')
        const card14 = document.getElementById('card14')
        const card15 = document.getElementById('card15')
        const card16 = document.getElementById('card16')
        const card17 = document.getElementById('card17')
        const card18 = document.getElementById('card18')

        if (window.scrollY < card2.offsetTop - 100) {
            setActiveLink('card1')
        } else if (window.scrollY < card3.offsetTop - 100) {
            setActiveLink('card2')
        } else if (window.scrollY < card4.offsetTop - 100) {
            setActiveLink('card3')
        } else if (window.scrollY < card5.offsetTop - 100) {
            setActiveLink('card4')
        } else if (window.scrollY < card6.offsetTop - 100) {
            setActiveLink('card5')
        } else if (window.scrollY < card7.offsetTop - 100) {
            setActiveLink('card6')
        } else if (window.scrollY < card8.offsetTop - 100) {
            setActiveLink('card7')
        } else if (window.scrollY < card9.offsetTop - 100) {
            setActiveLink('card8')
        } else if (window.scrollY < card10.offsetTop - 100) {
            setActiveLink('card9')
        } else if (window.scrollY < card11.offsetTop - 100) {
            setActiveLink('card10')
        } else if (window.scrollY < card12.offsetTop - 100) {
            setActiveLink('card11')
        } else if (window.scrollY < card13.offsetTop - 100) {
            setActiveLink('card12')
        } else if (window.scrollY < card14.offsetTop - 100) {
            setActiveLink('card13')
        } else if (window.scrollY < card15.offsetTop - 100) {
            setActiveLink('card14')
        } else if (window.scrollY < card16.offsetTop - 100) {
            setActiveLink('card15')
        } else if (window.scrollY < card17.offsetTop - 100) {
            setActiveLink('card16')
        } else if (window.scrollY < card18.offsetTop - 100) {
            setActiveLink('card17')
        }
        else {
            setActiveLink('card18')
        }
    }

    return (
        <section className="side-bar">
            <ul>
                <li>
                    <a href="#card1" className={activeLink === 'card1' ? 'active' : ''}>אריג מצדה</a>
                </li>
                <li>
                    <a href="#card2" className={activeLink === 'card2' ? 'active' : ''}>נירון קיסר</a>
                </li>
                <li>
                    <a href="#card3" className={activeLink === 'card3' ? 'active' : ''}>חורבן בית שני</a>
                </li>
                <li>
                    <a href="#card4" className={activeLink === 'card4' ? 'active' : ''}>מרד התפוצות</a>
                </li>
                <li>
                    <a href="#card5" className={activeLink === 'card5' ? 'active' : ''}>ר' יוסי גלילי</a>
                </li>
                <li>
                    <a href="#card6" className={activeLink === 'card6' ? 'active' : ''}>אריג ואדי מרובעת</a>
                </li>
                <li>
                    <a href="#card7" className={activeLink === 'card7' ? 'active' : ''}>גזירות אדריאנוס - דורו של שמד</a>
                </li>
                <li>
                    <a href="#card8" className={activeLink === 'card8' ? 'active' : ''}>ר' מאיר</a>
                </li>
                <li>
                    <a href="#card9" className={activeLink === 'card9' ? 'active' : ''}>אנטונינוס (קרקלה)</a>
                </li>
                <li>
                    <a href="#card10" className={activeLink === 'card10' ? 'active' : ''}>ר' יהודה הנשיא</a>
                </li>
                <li>
                    <a href="#card11" className={activeLink === 'card11' ? 'active' : ''}>"פרגמטיא" בעיר צור</a>
                </li>
                <li>
                    <a href="#card12" className={activeLink === 'card12' ? 'active' : ''}>אביי</a>
                </li>
                <li>
                    <a href="#card13" className={activeLink === 'card13' ? 'active' : ''}>רבא</a>
                </li>
                <li>
                    <a href="#card14" className={activeLink === 'card14' ? 'active' : ''}>רב אחאי</a>
                </li>
                <li>
                    <a href="#card15" className={activeLink === 'card15' ? 'active' : ''}>יוסטיניאנוס</a>
                </li>
                <li>
                    <a href="#card16" className={activeLink === 'card16' ? 'active' : ''}>עריכת הבבלי</a>
                </li>
                <li>
                    <a href="#card17" className={activeLink === 'card17' ? 'active' : ''}>מלחמות הפרסים והביזנטיים</a>
                </li>
                <li>
                    <a href="#card18" className={activeLink === 'card18' ? 'active' : ''}>מדרש תנחומא</a>
                </li>
            </ul>
        </section>
    )
}