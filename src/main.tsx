import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router";
import First from "./layouts/FirstPage";
import Second from "./layouts/SecondPage";
import Third from "./layouts/ThirdPage";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App />} />
            <Route path ="/page-1" element={<First />} />
            <Route path ="/page-2" element={<Second />} />
            <Route path ="/page-3" element={<Third />} />
        </Routes>
    </BrowserRouter>
)
