import {useEffect, useState} from 'react';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';
import Popup from '../popup/popup';
import "./crous.css";

const Crous = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [displayText, setDisplayText] = useState('');
    const [dialogueText, setDialogueText] = useState([]);
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showChoice, setShowChoice] = useState(false);

    const initialText = [
        <p key="l1" className="l1">Quoi ? Tu as perdu ton identité ? C’est déjà arrivé à d’autres personnes ici.</p>,
        <p key="l2" className="l2"> Regarde, trois groupes organisent un jeu de mémoire, ça peut peut-être t’aider, choisi ton lieux.</p>,
    ];

    useEffect(() => {
        document.body.classList.add('body-background-cafe');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-cafe');
            document.body.classList.remove('body-background-cafe-jeux');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> Cafeteria</>);
        }, 1000);

        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-cafe-kyllian-tips');
            setButtonText("Faire mon choix");
            setNameText("Monsieur Vert");
            setDialogueText(initialText);
        }, 5000);


        return () => {
            clearTimeout(showTextTimeout);
            clearTimeout(hideTextTimeout);
            clearTimeout(showNewImgTimeout);
        };
    }, []);


    const handleButtonClick = () => {
        document.body.classList.remove('body-background-cafe-kyllian-tips');
        document.body.classList.remove('body-background-cafe');
        document.body.classList.add('body-background-cafe-jeux');
        document.querySelector(".text-container").style.display = "none";
        setShowChoice(true);
    };

    const handleCreaItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/crea/projet-crea7.png",
            text: "En deuxième année nous avons dû réaliser un projet collectif en collaboration avec le lycée Dumont d’Urville à Toulon afin de participer à la création des décors d’un de leurs spectacles de danse. " +
                "Le principe était de réaliser 4 scènes en 3D sur le thème voyage au centre de la terre, nous avons dû mettre à profit nos connaissances sur le logiciel de 3D Blender. ",
            lien2: "/plateau",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });
    };

    const handleDevItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/dev/projet-dev7.png",
            text: "Il existe aussi quelques cours de jeux vidéo, en troisième année, nous avons eu des cours de 3D sur le moteur de jeu vidéo UNITY. " +
                "L’objectif était de prendre en main le logiciel en créant un jeu vidéo dans un temps donné. " +
                "Programmation des animations, optimisation de la lumière, création de texture, tweaking de shader, export.  https://lactolactique.itch.io/first-game",
            lien2: "/servicetechnique",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });

    };
    const handleComItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/com/projet-com7.png",
            text: "En première année nous avons été amenés à imaginer un concept innovant en rapport avec sport." +
                " En groupe nous avons créé une tante gonflable et de gonflable en 10 secondes grâce à des bulles de gel et un compresseur. " +
                "Le but était de développer notre sens de la création et de l’imagination à travers un plan de communication très complet.",
            lien2: "/salleprof",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });

    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <div>

            <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
            {!nameText && (<Map image="../src/assets/img/map/map-crous.png"/>)}
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
                        <div className="lieu1" onClick={handleCreaItemClick}>plateau tournage</div>
                        <div className="lieu2" onClick={handleDevItemClick}>Service technique</div>
                        <div className="lieu3" onClick={handleComItemClick}>Professeur</div>
                    </div>
                    {showPopup && (
                        <Popup
                            image={popupContent.image}
                            titre={popupContent.title}
                            p1={popupContent.text}
                            lien2={popupContent.lien2}
                            titre_lien={popupContent.buttonText1}
                            titre_lien2={popupContent.buttonText2}
                            onClose={handleClosePopup}
                        />
                    )}
                </>
            )}
        </div>
    )
        ;
}

export default Crous;
