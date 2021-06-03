import { Bones } from "react-bones/lib/Bones";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { Link } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import Products from "../../components/product/products/products";
import './accueil.css'
import fetchEveryThing from '../../components/service/Chargement'
import NavBar from '../../components/navBar/navbar'
import Footer from '../../components/footer/footer'

const chargement = async function () {
    const promise = await fetchEveryThing();
    return promise;
}
function Accueil() {
    const [Tv, setTv] = useState(null);
    const [Ordi, setOrdi] = useState(null);
    const [Tel, setTel] = useState(null);
    const [data, setdata] = useState(null);
    useEffect(() => {

       
        chargement().then(obj => {

            setOrdi(obj[0]);
            setTv(obj[1]);
            setTel(obj[2]);
            console.log('sam');
        });
    }, []);
    console.log('sam')
    if (Ordi === null) {
        return <div style={{ width: 500, height: 500 }}>
            <Bones />
            <div style={{ padding: 10 }}></div>
            <Bones width={600} height={20} />
            <div style={{ padding: 10 }} ></div>
            <Bones width={600} height={20} />
            <div style={{ padding: 10 }} ></div>
            <Bones width={600} height={20} />
            <div style={{ padding: 10 }} ></div>
        </div>
    }


    return (
        <Fragment>
            <NavBar />
            <div id="main-container">
                <div id="landing">
                    <div id="landing-content">
                        <div id="slogan">
                            <h1>Agora Market place </h1>
                            <p id="sub-slogan1">Desormais effectuer vos achats en ligne en toutes simplicites, beneficiants
                                de notre service de livraison à domicile avec <br />des articles de choix sur Agora.com</p>
                            <p id="sub-slogan2">Faire des achats n'a jamais été aussi simple !!!</p>
                           <a href = "/search"> 
                                <button id="btn-slogan" > 
                                    Debuter vos achats<FaShoppingCart className="shopping-cart" /> 
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="decouvrir">
                    <h1>Decouvrir nos produits <HiOutlineShoppingBag className="bag" /></h1>
                    <hr className="gris" /> <hr className="orange" />
                </div>
                <div id="section-container1">
                    <div className="custom-shape-divider-top-1621093012">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <div id="cat1">
                        <h3>Ordinateur</h3>
                        <Products datas={Ordi} />

                    </div>
                    <div className="separateurs">
                        <span></span>
                        <span className="separateur"></span>
                        <span></span>
                    </div>
                    <div id="cat2">
                        <h3>Telephone</h3>
                        <Products datas={Ordi} />

                    </div>
                    <div className="separateurs">
                        <span></span>
                        <span className="separateur"></span>
                        <span></span>
                    </div>
                    <div id="cat3">
                        <h3>Tv</h3>
                        <Products datas={Ordi} />
                    </div>
                    <div className="custom-shape-divider-bottom-1620848659">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div id="section-container2">
                    <h1>UNE MARKET PLACE FIABLE</h1>
                    <hr />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default Accueil;