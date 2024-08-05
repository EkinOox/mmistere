import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "./salle1.css";
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

const Salle12 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.classList.add('body-background-salle1-ines');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-salle1-ines');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const initialText = [
        <p className="l1">Ah oui tu as raison, parfait je te remercie, garde l’appareil j’en ai acheté un autre depuis. </p>,
        <p className="l2">Je vais à la cafétéria, tu veux qu’on mange ensemble ? </p>,
        <br/>
    ];

    const [dialogueText, setDialogueText] = useState(initialText);

    const handleNext = () => {
        navigate('/cafeteria');
    };

    return (
        <>
            <div className="text-container">
                <div className="text-dialogue">
                    {dialogueText.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>

                <div className="text-btnDiv">
                    <button onClick={handleNext}>
                        Oui, Pourquoi pas
                    </button>
                </div>
            </div>
        </>
    )
}

export default Salle12;
