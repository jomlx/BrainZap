import './App.css'
import Alert from "./components/Alert";
import Header from "./components/Header";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Main from './layout/Main';

function App() {
  return(
    <>
      <Header/>
      <main>
        <div className="left">
          <Navbar />
          <Timer />
        </div>
        <div className="right">
          <Library />
        </div>
      </main>
    </>
  );
}

export default App
