import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';
import "./salleprof.css";

const Salleprof = () => {

    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        document.body.classList.add('body-background-salleprof');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-salleprof');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> Salle des profs</>);
        }, 1000);

        return () => {
            clearTimeout(showTextTimeout);
        };
    }, []);

    return (
        <div>
            <Map image="../src/assets/img/map/map-salleprof.png"/>
            <button className="button" onClick={() => navigate('/salletp')}>Aller en salle de classe</button>
        </div>
    )
        ;
}

export default Salleprof;
