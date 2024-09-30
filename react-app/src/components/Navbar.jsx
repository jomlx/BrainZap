import '../styles/navbar.css';
function Navbar() {
    return(
        <nav className='navbar'>
            <ul className='navbar-menu'>
            <li><a href="#">Library</a></li>
            <li><a href="#">Reviewer</a></li>
            <li><a href="#">Ranking</a></li>
            <li><a href="#">Setting</a></li>
            </ul>
        </nav>
    );
}

export default Navbar