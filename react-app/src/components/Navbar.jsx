import '../styles/navbar.css';
function Navbar() {
    return(
        <nav className='navbar'>
            <ul className='navbar-menu'>
            <li><a href="#" className='library'>Library</a></li>
            <li><a href="#" className='Reviewer'>Reviewer</a></li>
            <li><a href="#" className='Ranking'>Ranking</a></li>
            <li><a href="#" className='Setting'>Setting</a></li>
            </ul>
        </nav>
    );
}

export default Navbar