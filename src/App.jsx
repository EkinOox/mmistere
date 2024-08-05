import {Route, Routes} from "react-router-dom";
import Entre from './components/entre/entre';
import Amphi from './components/amphi/amphi';
import Amphi2 from './components/amphi/amphi2';
import Amphi3 from './components/amphi/amphi3';
import Amphi4 from './components/amphi/amphi4';
import Amphi5 from './components/amphi/amphi5';
import Intro from './components/intro/intro';
import Boxprod from './components/boxprod/boxprod';
import Boxprod2 from './components/boxprod/boxprod2';
import Sallereseau from './components/sallereseau/sallereseau';
import Sallereseau2 from './components/sallereseau/sallereseau2';
import Bu from './components/bu/bu';
import Bu2 from './components/bu/bu2';
import Terrasse from './components/terrasse/terrasse';
import Salle1 from './components/salle1/salle1';
import Salle12 from './components/salle1/salle12';
import Salle2 from './components/salle2/salle2';
import Salle22 from './components/salle2/salle22';
import Salle3 from './components/salle3/salle3';
import Salle32 from './components/salle3/salle32';
import Cafeteria from './components/cafeteria/cafeteria';
import Crous from './components/crous/crous';
import Distributeur from './components/distributeur/distributeur';
import Servicetechnique from './components/servicetechnique/servicetechnique';
import Salleprof from './components/salleprof/salleprof';
import Plateau from './components/plateau/plateau';
import Salletp from './components/salletp/salletp.jsx';
import Fin from './components/fin/fin.jsx';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Entre/>
                    </>
                }
            />
            <Route
                path="/amphi"
                element={
                    <>
                        <Amphi/>
                    </>
                }
            />
            <Route
                path="/intro"
                element={
                    <>
                        <Intro/>
                    </>
                }
            />
            <Route
                path="/amphi2"
                element={
                    <>
                        <Amphi2/>
                    </>
                }
            />
            <Route
                path="/amphi3"
                element={
                    <>
                        <Amphi3/>
                    </>
                }
            />
            <Route
                path="/amphi4"
                element={
                    <>
                        <Amphi4/>
                    </>
                }
            />
            <Route
                path="/amphi5"
                element={
                    <>
                        <Amphi5/>
                    </>
                }
            />
            <Route
                path="/boxprod"
                element={
                    <>
                        <Boxprod/>
                    </>
                }
            />
            <Route
                path="/boxprod2"
                element={
                    <>
                        <Boxprod2/>
                    </>
                }
            />
            <Route
                path="/sallereseau"
                element={
                    <>
                        <Sallereseau/>
                    </>
                }
            />
            <Route
                path="/sallereseau2"
                element={
                    <>
                        <Sallereseau2/>
                    </>
                }
            />
            <Route
                path="/bu"
                element={
                    <>
                        <Bu/>
                    </>
                }
            />
            <Route
                path="/bu2"
                element={
                    <>
                        <Bu2/>
                    </>
                }
            />
            <Route
                path="/terrasse"
                element={
                    <>
                        <Terrasse/>
                    </>
                }
            />
            <Route
                path="/salle1"
                element={
                    <>
                        <Salle1/>
                    </>
                }
            />
            <Route
                path="/salle12"
                element={
                    <>
                        <Salle12/>
                    </>
                }
            />
            <Route
                path="/salle2"
                element={
                    <>
                        <Salle2/>
                    </>
                }
            />
            <Route
                path="/salle22"
                element={
                    <>
                        <Salle22/>
                    </>
                }
            />
            <Route
                path="/salle32"
                element={
                    <>
                        <Salle32/>
                    </>
                }
            />
            <Route
                path="/salle3"
                element={
                    <>
                        <Salle3/>
                    </>
                }
            />
            <Route
                path="/cafeteria"
                element={
                    <>
                        <Cafeteria/>
                    </>
                }
            />
            <Route
                path="/crous"
                element={
                    <>
                        <Crous/>
                    </>
                }
            />
            <Route
                path="/distributeur"
                element={
                    <>
                        <Distributeur/>
                    </>
                }
            />
            <Route
                path="/servicetechnique"
                element={
                    <>
                        <Servicetechnique/>
                    </>
                }
            />
            <Route
                path="/salleprof"
                element={
                    <>
                        <Salleprof/>
                    </>
                }
            />
            <Route
                path="/plateau"
                element={
                    <>
                        <Plateau/>
                    </>
                }
            />
            <Route
                path="/salletp"
                element={
                    <>
                        <Salletp/>
                    </>
                }
            />
            <Route
                path="/fin"
                element={
                    <>
                        <Fin/>
                    </>
                }
            />
        </Routes>
    );
}

export default App;
