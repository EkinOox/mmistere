import {useEffect, useState} from 'react';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import Puzzle from '../games/puzzle';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

import "./amphi.css";

const Amphi = () => {

    const [displayText, setDisplayText] = useState('');
    const [dialogueText, setDialogueText] = useState([]);
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const initialText = [
        <p key="l1" className="l1">Tu es désormais dans l’amphithéâtre, ta première salle et ton tout premier
            choix.</p>,
        <p key="l2" className="l2">Mais avant de faire ton tout premier choix, je te propose de tester ta logique. Pour
            cela, je te mets au défi de réussir ce puzzle !</p>,
    ];

    useEffect(() => {
        document.body.classList.add('body-background-amphi');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-amphi');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> AMPHITHEÂTRE</>);
        }, 1000);

        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-amphi-tristan');
            setButtonText("Relever le défi");
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
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };
    return (
        <div>
            <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
            {!nameText && (<Map image="../src/assets/img/map/map-amphi.png" />)}
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
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h2>Puzzle</h2>
                            <button className="close-btn" onClick={handlePopupClose}>X</button>
                        </div>
                        <div className="popup-body">
                            <Puzzle />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
        ;
}

export default Amphi;
