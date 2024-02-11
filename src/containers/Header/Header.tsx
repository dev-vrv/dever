import './Header.scss'
import { Nav } from '../../components/Nav/Nav'
import Logo from '../../components/Logo/Logo'

function Header() {
    return (
        <header className="header">
            <div className="container px-4 pt-4 d-flex justify-content-between">
                <Logo />
                <Nav />  
            </div>            
        </header>
    )
}

export default Header

