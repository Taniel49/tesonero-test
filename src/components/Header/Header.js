import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt='logo' className="header__logo"/>
            <div className='header__container'>
            <nav className="header__nav">
                <a href={'*'}><button className="header__button">NavItem1</button></a>
                <a href={'*'}><button className="header__button">NavItem2</button></a>
                <a href={'*'}><button className="header__button">NavItem3</button></a>
            </nav>
            <button className="header__button">Button</button>
            </div>
        </header>
    );
}

export default Header;