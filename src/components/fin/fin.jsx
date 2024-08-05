import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';


const Fin = () => {

    const [displayText, setDisplayText] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        document.body.classList.add('body-background-profil-dev');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-profil-dev');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-fin');
        }, 10000);


        return () => {
            clearTimeout(hideTextTimeout);
            clearTimeout(showNewImgTimeout);
        };
    }, []);


    return (
        <div>
            {showPopup && (<div className="popup-overlay"></div>)}
            <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
        </div>
    )
        ;
}

export default Fin;
