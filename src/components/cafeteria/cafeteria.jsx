import {useEffect, useState} from 'react';
import FeatherIcon from "feather-icons-react";
import Map from '../map/map';
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';
import Popup from '../popup/popup';
import "./cafeteria.css";

const Cafeteria = () => {

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
        document.body.classList.add('body-background-cafeteria');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-cafeteria');
            document.body.classList.remove('body-background-cafeteria-jeux');
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
            document.body.classList.add('body-background-cafeteria-ines-tips');
            setButtonText("Faire mon choix");
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
        document.body.classList.remove('body-background-cafeteria-ines-tips');
        document.body.classList.remove('body-background-cafeteria');
        document.body.classList.add('body-background-cafeteria-jeux');
        document.querySelector(".text-container").style.display = "none";
        setShowChoice(true);
    };

    const handleCreaItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/crea/projet-crea5.png",
            text: "Il arrive qu’on nous demande de réaliser des maquettes en vue de créer un site web. Ces dernières permettent d’avoir une vision très proche du produit fini ici un site de vente burger. " +
                "En deuxième année, nous avons dû créer une maquette entière comprenant un système de livraison en clic & collect, " +
                "un système de points pour que l’utilisateur retourne sur le site et la création d’une page pour créer son propre burger.",
            lien2: "/plateau",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });
    };

    const handleDevItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/dev/projet-dev5.png",
            text: "Lors de notre deuxième année nous avons dû réaliser en duo une appli mobile pour connaître la qualité de l’air à partir de l’API d'AtmoSud pour afficher l'IQA (Indice de Qualité de l’Air) en temps réel, développée en HTML-CSS, PHP et JSON.\n" +
                "\n" +
                " Les objectifs principaux du projet Mérid’Air sont de fournir un outil simple et accessible pour permettre aux utilisateurs de se renseigner sur la qualité de l’air de leur ville, de sensibiliser le public aux problèmes de pollution atmosphérique et d’encourager un comportement éco-responsable.",
            lien2: "/servicetechnique",
            buttonText1: "VOIR UNE AUTRE SALLE",
            buttonText2: "Valider mon choix",
            onClose: handleClosePopup
        });

    };
    const handleComItemClick = () => {
        setShowPopup(true);
        setPopupContent({
            image: "../src/assets/img/com/projet-com5.png",
            text: "Lors de notre deuxième année, nous avons réalisé le plan de communication pour un futur coloc à Carqueiranne en collaboration avec un prof de l’IUT. " +
                "Nous avons mis à profit nos compétences afin de réaliser un kakémono grâce au logiciel Adobe Illustrator.\n",
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

export default Cafeteria;
