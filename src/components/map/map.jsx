import {Link} from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {useState} from "react";
import "./map.css";

const Popup = ({image, titre, p1, p2, lien, titre_lien, lien2, titre_lien2, lien3, titre_lien3}) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleMapIconClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="overlay" style={{display: showPopup ? 'block' : 'none'}} onClick={handlePopupClose}></div>
            <div className="map-icon" onClick={handleMapIconClick}>
                <FeatherIcon icon='map' size="30" strokeWidth="2" className="icon"
                             style={{fill: "transparent", stroke: "red"}}/>
            </div>
            {showPopup && (
                <div className="popup">
                    <p className="close-btn" onClick={handlePopupClose}>X</p>
                    <img src={image} alt="image_popup"/>
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
                        {lien && (
                            <Link to={lien}>
                                <button>{titre_lien}</button>
                            </Link>
                        )}
                        <br/>
                        {lien2 && (
                            <Link key="lien2" to={lien2}>
                                <button>{titre_lien2}</button>
                            </Link>
                        )}
                        <br/>
                        {lien3 && (
                            <Link key="lien3" to={lien3}>
                                <button>{titre_lien3}</button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;
