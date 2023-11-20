import { useEffect, useState } from "react"

export function SideBarEng() {
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
        <section className="side-bar eng">
            <ul className="eng">
                <li>
                    <a href="#card1" className={activeLink === 'card1' ? 'active' : ''}>The Masada fabric</a>
                </li>
                <li>
                    <a href="#card2" className={activeLink === 'card2' ? 'active' : ''}>Nero Caesar</a>
                </li>
                <li>
                    <a href="#card3" className={activeLink === 'card3' ? 'active' : ''}>The destruction of the second Temple</a>
                </li>
                <li>
                    <a href="#card4" className={activeLink === 'card4' ? 'active' : ''}>The Diaspora Rebellion</a>
                </li>
                <li>
                    <a href="#card5" className={activeLink === 'card5' ? 'active' : ''}>Rabbi Yossi Galili</a>
                </li>
                <li>
                    <a href="#card6" className={activeLink === 'card6' ? 'active' : ''}>Wadi Murabba'at fabric</a>
                </li>
                <li>
                    <a href="#card7" className={activeLink === 'card7' ? 'active' : ''}>Hadrian's decrees - Shmad's generation</a>
                </li>
                <li>
                    <a href="#card8" className={activeLink === 'card8' ? 'active' : ''}>Rabbi Meir</a>
                </li>
                <li>
                    <a href="#card9" className={activeLink === 'card9' ? 'active' : ''}>Antoninus (Caracalla)</a>
                </li>
                <li>
                    <a href="#card10" className={activeLink === 'card10' ? 'active' : ''}>Rabbi Yehuda Hanasi</a>
                </li>
                <li>
                    <a href="#card11" className={activeLink === 'card11' ? 'active' : ''}>"Pragmatia" in the city of Tyre</a>
                </li>
                <li>
                    <a href="#card12" className={activeLink === 'card12' ? 'active' : ''}>Abaye</a>
                </li>
                <li>
                    <a href="#card13" className={activeLink === 'card13' ? 'active' : ''}>Rabbah</a>
                </li>
                <li>
                    <a href="#card14" className={activeLink === 'card14' ? 'active' : ''}>Rabbi Achai</a>
                </li>
                <li>
                    <a href="#card15" className={activeLink === 'card15' ? 'active' : ''}>Justinianus</a>
                </li>
                <li>
                    <a href="#card16" className={activeLink === 'card16' ? 'active' : ''}>The Babylonian Talmud edition</a>
                </li>
                <li>
                    <a href="#card17" className={activeLink === 'card17' ? 'active' : ''}>The Persian and Byzantine Wars</a>
                </li>
                <li>
                    <a href="#card18" className={activeLink === 'card18' ? 'active' : ''}>Midrash Tanhuma</a>
                </li>
            </ul>
        </section>
    )
}