import './App.css'
import Header from "./components/Header";
import Library from "./pages/Library";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Main from './components/Main';

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
          <Main />
        </div>
      </main>
    </>
  );
}

export default App
