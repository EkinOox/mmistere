import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import mmistereLogo from '../../assets/img/logo.gif';
import backgroundAudio from '../../assets/audio/Professor_Layton_Theme_Song.mp3';
import './entre.css';

const Entre = () => {
    useEffect(() => {
        document.body.classList.add('body-background-entre');
        const audio = new Audio(backgroundAudio);
        audio.loop = true;
        audio.play();
        return () => {
            document.body.classList.remove('body-background-entre');
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="entre">
            <div className="logo-entre">
                <img src={mmistereLogo} alt="Logo du MMistère"/>
            </div>
            <div className="btnDiv">
                <Link to="/intro">
                    <button>
                        Commencer l'aventure
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Entre;
