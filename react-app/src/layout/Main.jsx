import './main.css'

import Library from "../components/Library";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

const Main =() =>  {
    return (
        <div className='layout'>
            <header>
                <Header />
            </header>
            <div className="left-part">
                <Navbar/>
                <Timer/>
            </div>
            <div className="main">
                <Library/>
            </div>
        </div>
    );
}

export default Main