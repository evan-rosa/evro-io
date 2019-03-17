import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBSimpleChart, MDBCard, MDBBtn, MDBCardBody, MDBCardText } from 'mdbreact';
import Foot from './Footer';

import '../index.css';

import axios from 'axios';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			about_p: [],
			about_skill_web_development_col_one: [],
			about_skill_web_development_col_two: [],
			about_skill_digital_marketing: [],
			about_skill_web_analytics_col_one: [],
			about_skill_web_analytics_col_two: [],
			about_skill_data_science_col_one: [],
			about_skill_data_science_col_two: [],
			about_education: [],
			resume: []
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const url = `http://127.0.0.1:8000/api/v2/pages/?type=about.AboutPage&fields=*`;
		const resume = `http://127.0.0.1:8000/api/v2/documents/`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					id: res.data.items[0].id,

					about_p: res.data.items[0].about_p,
					about_skill_web_development_col_one: res.data.items[0].about_skill_web_development_col_one,
					about_skill_web_development_col_two: res.data.items[0].about_skill_web_development_col_two,
					about_skill_digital_marketing: res.data.items[0].about_skill_digital_marketing,
					about_skill_web_analytics_col_one: res.data.items[0].about_skill_web_analytics_col_one,
					about_skill_web_analytics_col_two: res.data.items[0].about_skill_web_analytics_col_two,
					about_skill_data_science_col_one: res.data.items[0].about_skill_data_science_col_one,
					about_skill_data_science_col_two: res.data.items[0].about_skill_data_science_col_two,
					about_education: res.data.items[0].about_education
				});
				console.log(res.data.items);
			})
			.catch((error) => this.setState({ error }));
		axios
			.get(resume)
			.then((res) => {
				this.setState({
					id: res.data.items[0].id,
					resume: res.data.items[0].meta.download_url
				});
				console.log(res.data.items);
			})
			.catch((error) => this.setState({ error }));
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div>
				<MDBContainer>
					<MDBRow className="pt-5">
						<MDBCol md="12">
							<h1>About</h1>
							<p>{this.state.about_p}</p>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<h2>Skills and Techniques</h2>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<a href={this.state.resume}>
								<MDBBtn outline className="evro-navy-btn">
									Download my Resume
								</MDBBtn>
							</a>
						</MDBCol>
					</MDBRow>

					<MDBRow>
						<MDBCol lg="6" md="12" className="mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow>
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={80}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h2 className="skill-category">Web Development</h2>
										</MDBCol>
									</MDBRow>

									<MDBCardText>
										<MDBRow>
											<MDBCol md="6">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_web_development_col_one
													}}
												/>
											</MDBCol>
											<MDBCol md="6" className="mobile-margin-col">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_web_development_col_two
													}}
												/>
											</MDBCol>
										</MDBRow>
									</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>

						<MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow>
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={90}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h2 className="skill-category">Digital Marketing</h2>
										</MDBCol>
									</MDBRow>

									<MDBCardText>
										<MDBRow>
											<MDBCol md="6">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_digital_marketing
													}}
												/>
											</MDBCol>
										</MDBRow>
									</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>

						<MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow>
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={90}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h2 className="skill-category">Digital Analytics</h2>
										</MDBCol>
									</MDBRow>

									<MDBCardText>
										<MDBRow>
											<MDBCol md="6">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_web_analytics_col_one
													}}
												/>
											</MDBCol>
											<MDBCol md="6" className="mobile-margin-col">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_web_analytics_col_two
													}}
												/>
											</MDBCol>
										</MDBRow>
									</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>

						<MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
							<MDBCard>
								<MDBCardBody>
									<MDBRow>
										<MDBCol md="3">
											<MDBSimpleChart
												width={100}
												height={100}
												strokeWidth={10}
												percent={70}
												strokeColor="#e2282e"
											/>
										</MDBCol>
										<MDBCol md="9">
											<h2 className="skill-category">Data Science</h2>
										</MDBCol>
									</MDBRow>

									<MDBCardText>
										<MDBRow>
											<MDBCol md="6">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_data_science_col_one
													}}
												/>
											</MDBCol>
											<MDBCol md="6" className="mobile-margin-col">
												<div
													dangerouslySetInnerHTML={{
														__html: this.state.about_skill_data_science_col_two
													}}
												/>
											</MDBCol>
										</MDBRow>
									</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>

					<hr />

					<MDBRow>
						<MDBCol md="12">
							<h2>Education, Training, and Certifications</h2>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<div dangerouslySetInnerHTML={{ __html: this.state.about_education }} />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<Link to={`/contact`}>
								<MDBBtn outline className="evro-navy-btn">
									Contact
								</MDBBtn>
							</Link>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default HomePage;
