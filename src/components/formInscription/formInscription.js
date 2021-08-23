
import Logo from '../../img/Logo1.png';
import './formInscription.css';

function FormInscription(){
return(
        <div className = "wrapper formInscriptionContainer">
            <img src ={Logo} alt = 'logo' />
            <h2  style={{color:'000000', fontWeight:'600'}}>INSCRIPTION</h2>
            <form className='formInscription'>
                <label  className = 'formLabelZone' style={{display :'inline-block', textAlign:'left'}}>
                    <span className='formEtiquette'>Email</span>
                    <br/>
                    <input className='formInput' name="email" type='e-mail' />
                </label>
                <label  className = 'formLabelZone' style={{display :'inline-block', textAlign:'left'}}>
                    <span className='formEtiquette' > Mot de passe</span>
                    <br/>
                    <input className='formInput' name="password" type="password"/>
                 </label>
                 <br/>
                <button  className='formInput btnInscription' id='formInscriptionBtnConnexion'style={{display :'inline-block'}} type="submit">Connexion</button>
            </form>
            <p className='mdpOublie'><a href='forget.t' style={{textDecoration:'none', color:'#000000', fontWeight:'600'}}> Mot de passe oublié?</a></p>
            <p><a href='t/.co'>Créer un compte</a></p>
            <p>En vous connectant à votre compte, 
            vous acceptez <a href='t.co'>les conditions d'utilisation</a>
            et <a href='tf.co'>l'avis de confidentialité</a> d'AGORA 243 </p>
        </div>
    );
}


export default FormInscription;