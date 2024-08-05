import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

import "./terrasse.css";

const Terrasse = () => {

    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState('');
    const [dialogueText, setDialogueText] = useState([]);
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const initialText = [
        <p key="l1" className="l1">Ces objets ? Oui je sais à qui ils sont mais aucun d’entre eux ne t'appartient.</p>,
        <p key="l2" className="l2">Par contre je crois qu’ils les cherchent. Je me charge d’en rendre deux, lequel tu veux aller rendre à son propriétaire ?</p>,
    ];

    useEffect(() => {
        document.body.classList.add('body-background-terrasse');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-terrasse');
            document.body.classList.remove('body-background-terrasse-jolan-tips');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> Terrasse</>);
        }, 1000);

        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-terrasse-jolan-tips');
            setButtonText("Choisir");
            setNameText("Vacataire Rouge");
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

    const handleNavigateCrea = () => {
        navigate('/salle1');
    };
    const handleNavigateDev = () => {
        navigate('/salle2');
    };
    const handleNavigateCom = () => {
        navigate('/salle3');
    };
    return (
        <div>
            {showPopup && (<div className="popup-overlay"></div>)}
            <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
            {!nameText && (<Map image="../src/assets/img/map/map-terrasse.png" />)}
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
                    <div className="popup-content">
                        <div className="popup-header">
                        </div>
                        <div className="popup-body2">
                           <img className="img-popup" onClick={handleNavigateCrea} src="../src/assets/img/objet-photo.png"/>
                           <img className="img-popup" onClick={handleNavigateCom} src="../src/assets/img/objet-tel.png"/>
                           <img className="img-popup" onClick={handleNavigateDev} src="../src/assets/img/objet-ordi.png"/>
                        </div>
                </div>
            )}
        </div>
    )
        ;
}

export default Terrasse;
