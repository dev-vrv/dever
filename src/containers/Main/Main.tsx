import './Main.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Contacts from '../../pages/Contacts/Contacts'
import About from '../../pages/About/About'
import Services from '../../pages/Services/Services'

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </main>
    )
}

export default Main