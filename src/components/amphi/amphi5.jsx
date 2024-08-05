import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "./amphi.css";
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

const Amphi5 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.classList.add('body-background-amphi-tristan-objet');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-amphi-tristan-objet');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const initialText = [
        <p className="l1">Tu es sûr(e) de toi ?</p>,
        <p className="l2">C'est un choix à ne pas prendre à la légère</p>,
        <p className="l3">Il va décider de qui tu vas être</p>,
    ];

    const finalText = [
        <p className="l1">Regarde derrière la coque, il y a une confirmation de réservation de livre !</p>,
        <p className="l2">Essaye de chercher des indices à la bibliothèque, moi je te laisse là, on se voit plus tard !</p>,
        <p className="l3"> Prends aussi les deux autres objets, tu retrouveras peut-être leur propriétaire.</p>,
    ];

    const [dialogueText, setDialogueText] = useState(initialText);
    const [buttonText, setButtonText] = useState("Oui");
    const [buttonText2, setButtonText2] = useState("Non");
    const [marginBottom, setMarginBottom] = useState("-80px");

    const handleNext = () => {
        if (buttonText === "à plus") {
            navigate('/bu');
        } else {
            setDialogueText(finalText);
            setButtonText("à plus");
            setButtonText2("");
            setMarginBottom("-17px")
        }
    };
    const handleNext2 = () => {
        navigate('/amphi2');
    };

    return (
        <>
            <div className="text-container">
                <div className="text-name">Professeur Marron</div>
                <div className="text-dialogue" style={{marginBottom: marginBottom}}>
                    {dialogueText.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>

                {buttonText2 && (
                    <div className="text-btnDiv">
                        <button className="button-other" onClick={handleNext2}>
                            {buttonText2}
                        </button>
                    </div>
                )}

                <div className="text-btnDiv">
                    <button onClick={handleNext}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Amphi5;
