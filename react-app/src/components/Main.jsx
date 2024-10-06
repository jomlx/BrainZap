import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import Ranking from "../pages/Ranking";
import Reviewer from "../pages/Reviewer";

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/reviewer" element={<Reviewer />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </BrowserRouter>
    );
}