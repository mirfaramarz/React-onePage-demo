import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

export default function Footer() {
	const registeredmark = <Fragment>&#174;</Fragment>
    const andmark = <Fragment>&#38;</Fragment>
    const asterisk = <Fragment>&#42;</Fragment>
    const arrowright = <Fragment>&#8594;</Fragment>
	const facebook_style = { color: '#4267B2',};
	const youtube_style = { color: '#FF0000',}
	const pintrest_style = { color: '#E60023',}
	const instagram_style = { color: '#8a3ab9', }

    return (
        <React.Fragment>
            <footer class="footer">

			<section className="ft-social">
				<h1>Follow us!</h1>
					<ul className="ft-social-list">
						<li><Link className="link" to="/test"><i className="fab fa-facebook" style={facebook_style}></i></Link></li>
						<li><Link className="link" to="/test"><i className="fab fa-youtube" style={youtube_style}></i></Link></li>
						<li><Link className="link" to="/test"><i className="fab fa-pinterest" style={pintrest_style}></i></Link></li>
						<li><Link className="link" to="/test"><i className="fab fa-instagram" style={instagram_style}></i></Link></li>
					</ul>
			</section>

  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>COLONS.DE</h4>
  	 			<ul>
					<li><Link className="link" to="/test">Über uns</Link></li>
					<li><Link className="link" to="/test">Jobs</Link></li>
					<li><Link className="link" to="/test">Team</Link></li>
					<li><Link className="link" to="/test">Presse</Link></li>
					<li><Link className="link" to="/test">Impressium</Link></li>
					<li><Link className="link" to="/test">Datenschutz</Link></li>
					<li><Link className="link" to="/test">ABG</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Unsere service</h4>
  	 			<ul>
				   <li><Link className="link" to="/test">Kontakt</Link></li>
					<li><Link className="link" to="/test">FAQ</Link></li>
					<li><Link className="link" to="/test">Widerruf</Link></li>
					<li><Link className="link" to="/test">versandinfo</Link></li>
					<li><Link className="link" to="/test">Rückgabebericht</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Zahlungwege</h4>
  	 			<ul>
				   <li><Link className="link" to="/test">Rechnung</Link></li>
					<li><Link className="link" to="/test">Kreditkarte</Link></li>
					<li><Link className="link" to="/test">Paypall</Link></li>
					<li><Link className="link" to="/test">Lastschrift</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Unsere leistung</h4>
				   <ul>
				   <li><Link className="link" to="/test">{arrowright} Schnell lieferung</Link></li>
					<li><Link className="link" to="/test"> {arrowright} Versand kostenfrei</Link></li>
					<li><Link className="link" to="/test">{arrowright} Paypall</Link></li>
					<li><Link className="link" to="/test">{arrowright} 30 Tage rückgabeberecht</Link></li>
				   </ul>
  	 		</div>

			   <div class="footer-col">
  	 			<h4>einer für alle.<br/>Alles bei einem.</h4>
  	 		</div>
			   
  	 	</div>
  	 </div>
		<section className="footer-end">
			<div className="footer-container">
				<p className="footer-left"><span>{registeredmark}</span> Colons GmbH {andmark} Co.KG</p>
				<p className="footer-right">{asterisk}Brutto Verkaufpreis ohne Mehrwerttuer.Abbildung ähnlich.</p>
			</div>
		</section>
		

  </footer>
        </React.Fragment>
    )
}
