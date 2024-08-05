import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "./intro.css";
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

const Intro = () => {
    useEffect(() => {
        document.body.classList.add('body-background-entre-tristan');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-entre-tristan');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const initialText = [
        <p className="l1">Salut ! Qui es-tu ? … Quoi ? Tu ne t’en souviens pas ?</p>,
        <p className="l2"> Étrange… J’ai entendu des rumeurs disant que des vols d’identités avaient lieu sur le campus mais je n’y ai jamais cru.</p>,
        <p className="l3">Bon, pour le moment suis moi, j’ai peut-être une idée de comment t'aider à la retrouver. Rejoins moi dans l’amphithéâtre !</p>,
    ];

    const finalText = [
        <p className="l1">Ah oui tu ne sais pas comment faire… Tiens voilà un plan de l’université, il s'affiche en bas à droite de ton écran</p>,
        <p className="l2">Il suffit de cliquer dessus et choisir ta destination. Ça te permettra de te situer tout au long de ton aventure au sein de l’université.</p>,
        <p className="l3"> Sans oublier notre mascotte qui sera t’aiguiller vers tes choix. Commence par découvrir ta carte !</p>,
    ];

    const [dialogueText, setDialogueText] = useState(initialText);
    const [buttonText, setButtonText] = useState("Continuer");
    const [showPopup, setShowPopup] = useState(false);

    const handleNext = () => {
        setDialogueText(finalText);
        setButtonText("Voir la map");
        setShowPopup(buttonText === "Voir la map");
    };

    return (
        <>
            <div className="overlay" style={{display: showPopup ? 'block' : 'none'}} onClick={() => setShowPopup(false)}></div>
            <div className="text-container">
                <div className="text-name">Professeur Marron</div>
                <div className="text-dialogue">
                    {dialogueText.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>

                <div className="text-btnDiv">
                    <button onClick={handleNext}>
                        {buttonText}
                    </button>
                </div>
            </div>
            {showPopup && buttonText === "Voir la map" && (
                <div className="popup">
                    <p className="close-btn" onClick={() => setShowPopup(false)}>X</p>
                    <img src="../src/assets/img/map/carte.png" alt="image_popup"/>
                    <div><h2>MAP :</h2>
                        <p>Lors de ton aventure, tu découvriras différents lieux présents au sein de cette université.
                            Ne t’inquiète pas, tu auras la chance de pratiquement tous pouvoir les explorer.</p>

                        <br/>
                        <p> Le premier lieu dans lequel tu vas pouvoir aller est l’amphithéâtre.
                            Tu verras, tout n’est pas de repos...</p>
                        <br/>
                        <br/>
                        <Link to="/amphi">
                            <button>Aller à l'amphi</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Intro;
