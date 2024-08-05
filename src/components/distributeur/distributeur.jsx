import {useEffect, useState} from 'react';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';
import Popup from '../popup/popup';
import "./distributeur.css";

const Distributeur = () => {

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
        document.body.classList.add('body-background-distributeur');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-distributeur');
            document.body.classList.remove('body-background-distributeur-jeux');
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
            document.body.classList.add('body-background-distributeur-eva-tips');
            setButtonText("Faire mon choix");
            setNameText("Madame Orange");
            setDialogueText(initialText);
        }, 5000);


        return () => {
            clearTimeout(showTextTimeout);
            clearTimeout(hideTextTimeout);
            clearTimeout(showNewImgTimeout);
        };
    }, []);


    const handleButtonClick = () => {
        document.body.classList.remove('body-background-distributeur-eva-tips');
        document.body.classList.remove('body-background-distributeur');
        document.body.classList.add('body-background-distributeur-jeux');
        document.querySelector(".text-container").style.display = "none";
        setShowChoice(true);
    };

    const handleCreaItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/crea/projet-crea6.png",
            text: "En première année, dans le cadre du cours de “Design d’expérience”, nous avons dû réaliser le packaging de l’objet de notre choix, avec un mock-up en 3D et le gabarit du packaging en 2D. " +
                "Il fallait faire attention à la disposition des éléments sur le gabarit 2D, pour qu’une fois la boîte montée cela corresponde parfaitement.",
            lien2: "/plateau",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });
    };

    const handleDevItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/dev/projet-dev6.png",
            text: "Lors de notre deuxième année nous avons dû créer en groupe un projet de restaurant en ligne, où il fallait optimiser au mieux l'expérience utilisateur afin que le site soit le plus clair et simple à utiliser. " +
                "Pour cela, chaque personne a mis à profit ses compétences en création de maquette filaire, développement de site web et identité visuelle.\n" +
                "Sushi by me est un site de restauration japonais à emporter, optimisé pour l’expérience utilisateur.",
            lien2: "/servicetechnique",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });

    };
    const handleComItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/com/projet-com6.png",
            text: "Lors de notre troisième année nous avons été amené à faire de la veille et rechercher des informations sur l’entreprise Starbucks afin de créer un plan de communication à leur image." +
                " Le but de ce projet était de nous perfectionner dans l’analyse d’une marque existante et notre capacité à proposer des choix pertinents en accord avec notre parcours.",
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
            {!nameText && (<Map image="../src/assets/img/map/map-distributeur.png"/>)}
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

export default Distributeur;
