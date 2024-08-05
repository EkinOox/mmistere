import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';
import "./salle1.css";

const Salle1 = () => {

    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState('');
    const [dialogueText, setDialogueText] = useState([]);
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showChoice, setShowChoice] = useState(false);

    const initialText = [
        <p key="l1" className="l1">Qu’est-ce que tu viens faire là ? Oh mon téléphone, merci c’est gentil !</p>,
        <p key="l2" className="l2">Pendant que tu es là, aide moi s’il te plaît. Je n’arrive pas à trouver la vraie image parmi les deux, tu peux m’aider ?</p>,
    ];

    useEffect(() => {
        document.body.classList.add('body-background-salle1');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-salle1');
            document.body.classList.remove('body-background-salle1-jeux');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> Salle de classe</>);
        }, 1000);

        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-salle1-ines-tips');
            setButtonText("relever le defis");
            setNameText("Madame Beige");
            setDialogueText(initialText);
        }, 5000);


        return () => {
            clearTimeout(showTextTimeout);
            clearTimeout(hideTextTimeout);
            clearTimeout(showNewImgTimeout);
        };
    }, []);


    const handleButtonClick = () => {
        document.body.classList.remove('body-background-salle1-ines-tips');
        document.body.classList.remove('body-background-salle1');
        document.body.classList.add('body-background-salle1-jeux');
        document.querySelector(".text-container").style.display = "none";
        setShowChoice(true);
    };

    const handleCreaItemClick = () => {
        navigate('/salle12')
    };

    const handleDevItemClick = () => {
        document.querySelector(".num3").style.display = "none";
    };
    const handleComItemClick = () => {
        document.querySelector(".num1").style.display = "none";
    };

    return (
        <div>

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

            {showChoice && (
                <>
                    <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
                    <div className="object-container">
                        <div className="num1" onClick={handleComItemClick}>1</div>
                        <div className="num2" onClick={handleCreaItemClick}>2</div>
                        <div className="num3" onClick={handleDevItemClick}>3</div>
                    </div>
                </>
            )}
        </div>
    )
        ;
}

export default Salle1;
