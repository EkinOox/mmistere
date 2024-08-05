import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

import "./salletp.css";

const Salletp = () => {

    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState('');
    const [dialogueText, setDialogueText] = useState([]);
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const initialText = [
        <p key="l1" className="l1">Eh ! Je sais comment retrouver ton identité secrète.</p>,
        <p key="l2" className="l2">Suis moi je vais t’y emmener !</p>,
    ];

    useEffect(() => {
        document.body.classList.add('body-background-salle3');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-salle3');
            document.body.classList.remove('body-background-salle3-tristan');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> Salle de cours</>);
        }, 1000);

        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-salle3-tristan');
            setButtonText("Suivre le professeur");
            setNameText("Professeur Marron");
            setDialogueText(initialText);
        }, 5000);


        return () => {
            clearTimeout(showTextTimeout);
            clearTimeout(hideTextTimeout);
            clearTimeout(showNewImgTimeout);
        };
    }, []);


    const handleButtonClick = () => {
        document.body.classList.remove('body-background-salle3-tristan');
        navigate('/fin');
    };
    const handlePopupClose = () => {
        setShowPopup(false);
    };


    return (
        <div>
            {showPopup && (<div className="popup-overlay"></div>)}
            <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
            {!nameText && (<Map image="../src/assets/img/map/map-cours.png"/>)}
            <div className="text-container">
                <div className="text-name">{nameText}</div>
                <div className="text-dialogue2">
                    {dialogueText.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>

                <div className="text-btnDiv">
                    {buttonText && (
                        <button onClick={handleButtonClick}>
                            {buttonText}
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
        ;
}

export default Salletp;
