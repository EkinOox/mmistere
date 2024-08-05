import {useEffect, useState} from 'react';
import FeatherIcon from "feather-icons-react";
import Popup from '../popup/popup';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

import "./amphi.css";
import Map from "../map/map.jsx";

const Amphi2 = () => {

    const initialText = [
        <p key="l1" className="l1">Super ! Ça m'aurait pris des heures moi ! Voyons, on dirait que chacun de ces appareils contient une réalisation.</p>,
        <p key="l2" className="l2">Je te laisse regarder, un d’entre eux te dit quelque chose ? </p>,
    ];

    // const [displayText, setDisplayText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [dialogueText, setDialogueText] = useState([initialText]);
    const [popupContent, setPopupContent] = useState(null);
    const [buttonText, setButtonText] = useState('Choisir');
    const [nameText, setNameText] = useState('Professeur Marron');
    const [showChoice, setShowChoice] = useState(false);


    useEffect(() => {
        document.body.classList.add('body-background-amphi-tristan-tips');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-amphi-tristan-tips');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    // useEffect(() => {
        // const showTextTimeout = setTimeout(() => {
        //     setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
        //                                   style={{fill: "transparent", stroke: "red"}}/> AMPHITHEÂTRE</>);
        // }, 1000);

        // const hideTextTimeout = setTimeout(() => {
        //     setDisplayText('');
        // }, 6000);

        // return () => {
        //     clearTimeout(showTextTimeout);
        //     clearTimeout(hideTextTimeout);
        // };
    // }, []);

    const handleCreaItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/crea/projet-crea1.jpg",
            title: "Appareil Photo",
            text: "Cette caméra a servi pour tourner un reportage sur l'apnée lors d’un projet de première année en groupe. " +
                "Le but était de faire découvrir un sport tout en interviewant un professionnel du sujet pour en savoir un peu plus. " +
                "Pour cela nous avons mis en avant nos compétences sur des logiciels tels que premiere pro pour le montage vidéo.",
            lien2: "/amphi3",
            buttonText1: "VOIR UN AUTRE OBJET",
            buttonText2: "Choisir",
            onClose: handleClosePopup
        });
    };

    const handleDevItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/dev/projet-dev1.png",
            title: "Ordinateur",
            text: "Cet ordinateur a servi à coder un site internet sur le thème “Le monde de la glisse”. " +
                "Ce projet a été réalisé en première année en duo, le but était de créer un site vitrine pour des articles de sports nautiques tels que le wakeboard, kitesurf ou la planche à voile. " +
                "Nous avons pu mettre en lumière nos connaissances en bootstrap ainsi qu’en création de maquette filaire.",
            lien2: "/amphi4",
            buttonText1: "VOIR UN AUTRE OBJET",
            buttonText2: "Choisir",
            onClose: handleClosePopup
        });

    };
    const handleComItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/com/projet-com1.png",
            title: "Téléphone",
            text: "Ce téléphone a servi à imaginer et réaliser des visuels pour une compte instagram professionnel. " +
                "Le but à travers ce projet était de présenter et montrer notre univers à travers un ou plusieurs réseaux sociaux. " +
                "Ce projet a mis à contribution nos talents de création graphique ainsi que de veille.\n",
            lien2: "/amphi5",
            buttonText1: "VOIR UN AUTRE OBJET",
            buttonText2: "Choisir",
            onClose: handleClosePopup
        });

    };

    const handleButtonClick = () => {
        document.body.classList.remove('body-background-amphi-tristan-tips');
        document.body.classList.add('body-background-amphi-objet');
        document.querySelector(".text-container").style.display = "none";
        setShowChoice(true);
    };
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>

            {/*<div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>*/}
            {!nameText && (<Map image="../src/assets/img/map/map-boxprod.png"/>)}
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
                    <div className="object-container">
                        <div onClick={handleCreaItemClick}>Appareil Photo</div>
                        <div onClick={handleDevItemClick}>Ordinateur</div>
                        <div onClick={handleComItemClick}>Téléphone</div>
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
    );
};

export default Amphi2;
