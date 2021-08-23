import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import './footer.css'
function Footer() {
    return (
        <div id="footer-container">
            <div id="droits">
                <h4>Droits</h4>
                <p><Link className="lien" to="/">Conditions d'utilisations</Link></p>
                <p><Link className="lien" to="/">Politique de confidentialités</Link></p>
            </div>
            <div id="informations">
                <h4>Informations</h4>
                <p><Link className="lien" to="/">A propos de nous </Link></p>
                <p><Link className="lien" to="/">Affiliation</Link></p>
                <p><Link className="lien" to="/">Tarification</Link></p>
            </div>
            <div id="aide">
                <h4>Aide</h4>
                <p><Link className="lien" to="/">Support</Link></p>
                <p><Link className="lien" to="/">Contact</Link></p>
            </div>
            <div id="rx-sociaux">
                <h4>Reseaux sociaux</h4>
                <Link className="lien" to="/"><FaFacebookSquare className="iconsF" /></Link>
                <Link className="lien" to="/"><FaInstagram className="iconsF"/></Link>
                <Link className="lien" to="/"><FaTwitter className="iconsF"/></Link>
                <br/><Link to="/register">
                    <button id="inscrireF">S'inscrire</button>
                </Link>
            </div>
            </div>
    )
}
export default Footer;