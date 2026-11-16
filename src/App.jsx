
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FondoAnimado from './components/Fondo-Animado';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Nosotros from './pages/Nosotros';

function App() {
    return (
        <>
            <FondoAnimado />

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
