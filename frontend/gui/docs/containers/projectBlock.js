import React from 'react';
import Foot from '../components/Footer';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '../index.css';
import axios from 'axios';

class ProjectBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {}
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const projectID = this.props.match.params.projectID;
		const url = `http://127.0.0.1:8000/api/v2/pages/${projectID}/?type=projects.ProjectsPage&fields=*`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					project: res.data,
					image: res.data.project_image_url.url
				});
				console.log(res.data.project_image_url.url);
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
					<MDBRow>
						<MDBCol md="12">
							<h1>{this.state.project.project_h_one}</h1>
							<h2>{this.state.project.project_h_two}</h2>
							<p>{this.state.project.project_intro_p}</p>
							<a href={this.state.project.project_url} target="_blank">
								<MDBBtn outline className="evro-navy-btn">
									See Project
								</MDBBtn>
							</a>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<img src={this.state.image} alt="" className="img-fluid" />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<h2>Site Released</h2>
							<p>{this.state.project.project_p}</p>
							<h2>Technologies and Services</h2>
							<div
								dangerouslySetInnerHTML={{ __html: this.state.project.project_tech_stack_description }}
							/>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default ProjectBlock;
