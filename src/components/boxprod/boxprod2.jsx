import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "./boxprod.css";
import backgroundAudio from '../../assets/audio/Professor_Layton_-_About_town_Extended.mp3';

const Boxprod2 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.classList.add('body-background-boxprod-azzura');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-boxprod-azzura');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const initialText = [
        <p className="l1">Ok, très bien je vois. </p>,
        <p className="l2"> Pour te récompenser, je te conseille d’aller voir le Vacataire Rouge, je l’ai vu récemment par ici, peut-être qu’il pourra t’aider.</p>,
        <p className="l3">Il doit être sur la terrasse en ce moment.</p>,
    ];

    const [dialogueText, setDialogueText] = useState(initialText);

    const handleNext = () => {
            navigate('/terrasse');
    };

    return (
        <>
            <div className="text-container">
                <div className="text-name">Miss Bleu</div>
                <div className="text-dialogue">
                    {dialogueText.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>

                <div className="text-btnDiv">
                    <button onClick={handleNext}>
                        Avancer
                    </button>
                </div>
            </div>
        </>
    )
}

export default Boxprod2;
