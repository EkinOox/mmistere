import { Link} from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {useState} from "react";
import "./popup.css";

const Popup = ({onClose, image, titre, p1, p2, lien, titre_lien, lien2, titre_lien2, lien3, titre_lien3}) => {

    const [showPopup, setShowPopup] = useState(true);
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="overlay" style={{display: showPopup ? 'block' : 'none'}} onClick={onClose}></div>

            {showPopup && (
                <div className="popup">
                    <p className="close-btn" onClick={onClose}>X</p>
                    <div className="container-popup-img">
                        <img className="img-projet" src={image} alt="image_popup"/>
                    </div>
                    <div className="container-popup">
                        {titre && (
                            <h2>{titre}</h2>
                        )}
                        <p>{p1}</p>
                        <br/>
                        {p2 && (
                            <p>{p2}</p>
                        )}
                        <br/>
                        <br/>

                        <button style={{
                            right: "30px",
                            position:"fixed",
                            marginTop:"-2rem",
                        }} className="button-other" onClick={onClose}>{titre_lien}</button>

                        <br/>
                        {lien2 && (
                            <Link key="lien2" to={lien2}>
                                <button style={{
                                    right: "30px",
                                    position:"fixed",
                                }}>{titre_lien2}</button>
                            </Link>
                        )}
                        <br/>
                        {lien3 && (
                            <Link key="lien3" to={lien3}>
                                <button style={{
                                    right: "30px",
                                    position:"fixed",
                                }}>{titre_lien3}</button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;
