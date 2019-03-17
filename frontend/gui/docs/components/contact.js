import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import ContactForm from './formContact';
import Foot from './Footer';

import '../index.css';
import { ReactComponent as City } from '../assets/img/svg/dc-map.svg';

class ContactPage extends React.Component {
	render() {
		return (
			<div>
				<MDBContainer>
					<MDBRow>
						<MDBCol md="12">
							<h1>Let's Chat</h1>
							<p>Come say Hello</p>
							<p>erosa26@gmail.com</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<div className="map-fit">
					<City className="dc-map" />
				</div>
				<MDBContainer>
					<MDBRow>
						<MDBCol md="12">
							<h2>Say Hello</h2>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<ContactForm />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default ContactPage;
