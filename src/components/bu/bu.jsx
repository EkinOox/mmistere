import {useEffect, useState} from 'react';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import Popup from '../popup/popup';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';
import "./bu.css";

const Bu = () => {

    const [displayText, setDisplayText] = useState('');
    const [dialogueText, setDialogueText] = useState([]);
    const [buttonText, setButtonText] = useState('');
    const [nameText, setNameText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showChoice, setShowChoice] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const initialText = [
        <p key="l1" className="l1">Salut, tu cherches quelque chose ? Cet objet ? Non désolé ça ne me dit rien.</p>,
        <p key="l2" className="l2">Par contre j’ai besoin de toi, peux-tu choisir le mot qui t’inspire le plus parmi ces
            trois là ?</p>,
    ];

    useEffect(() => {
        document.body.classList.add('body-background-bu');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-bu');
            document.body.classList.remove('body-background-bu-livre');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        const showTextTimeout = setTimeout(() => {
            setDisplayText(<><FeatherIcon icon='map-pin' size="30" strokeWidth="2" className="icon"
                                          style={{fill: "transparent", stroke: "red"}}/> Bibliothèque Universitaire</>);
        }, 1000);

        const hideTextTimeout = setTimeout(() => {
            setDisplayText('');
        }, 4000);

        const showNewImgTimeout = setTimeout(() => {
            document.body.classList.add('body-background-bu-azzura');
            setButtonText("Choisir le mot");
            setNameText("Miss Bleu");
            setDialogueText(initialText);
        }, 5000);


        return () => {
            clearTimeout(showTextTimeout);
            clearTimeout(hideTextTimeout);
            clearTimeout(showNewImgTimeout);
        };
    }, []);


    const handleButtonClick = () => {
        document.body.classList.remove('body-background-bu-azzura');
        document.body.classList.add('body-background-bu-livre');
        document.querySelector(".text-container").style.display = "none";
        setShowChoice(true);
    };

    const handleCreaItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/crea/projet-crea4.png",
            title: "Evolution",
            text: "Lors de notre deuxième année, nous avons dû réaliser un grand projet en groupe. Le but était de créer des agences sur le thème de la cigale.\n" +
                "L’agence de communication Lineup’s nous a permis de développer le sens du travail d'équipe et d'être pluridisciplinaire.\n" +
                "\n" +
                "Nous avons pu développer notre côté créatif de part la conception de plusieurs affiches mais également la réalisation d’un teaser de 1min00.\n",

            lien2: "/bu2",
            buttonText1: "VOIR UN AUTRE MOT",
            buttonText2: "VALIDER mon choix",
            onClose: handleClosePopup
        });
    };

    const handleDevItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/dev/projet-dev4.png",
            title: "Construction",
            text: "Lors de notre deuxième année, nous avons dû réaliser un grand projet en groupe. Le but était de créer des agences sur le thème de la cigale.\n" +
                "L’agence de communication Lineup’s nous a permis de développer le sens du travail d'équipe et d'être pluridisciplinaire.\n" +
                "\n" +
                "Nous aons concu entierement un site web vitrine à l’aide de Wordpress dans le but de présenter nors réalisations et ce que nous proposons à nos clients.\n" +
                "\n",
            lien2: "/bu2",
            buttonText1: "VOIR UN AUTRE MOT",
            buttonText2: "VALIDER mon choix",
            onClose: handleClosePopup
        });

    };
    const handleComItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/com/projet-com4.png",
            title: "Accomplissement",
            text: "Lors de notre deuxième année, nous avons dû réaliser un grand projet en groupe. Le but était de créer des agences sur le thème de la cigale.\n" +
                "L’agence de communication Lineup’s nous a permis de développer le sens du travail d'équipe et d'être pluridisciplinaire.\n" +
                "\n" +
                "Nous avons pu communiquer à travers des réseaux sociaux tels que Instagram, facebook ou bien encore X.\n" +
                "\n",
            lien2: "/bu2 ",
            buttonText1: "VOIR UN AUTRE MOT",
            buttonText2: "VALIDER mon choix",
            onClose: handleClosePopup
        });

    };


    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <div>

            <div className={`text-display ${displayText ? 'show' : ''}`}>{displayText}</div>
            {!nameText && (<Map image="../src/assets/img/map/map-bu.png"/>)}
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
                        <div className="objet7" onClick={handleComItemClick}>Accomplissement</div>
                        <div className="objet8" onClick={handleCreaItemClick}>Evolution</div>
                        <div className="objet9 " onClick={handleDevItemClick}>Construction</div>
                    </div>
                    {
                        showPopup && (
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

export default Bu;
