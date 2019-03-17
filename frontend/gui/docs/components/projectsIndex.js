import React from 'react';
import Foot from './Footer';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../index.css';
import axios from 'axios';

import ProjectsList from '../containers/projectsList';

class ProjectIndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const url = `http://127.0.0.1:8000/api/v2/pages/?type=projects.ProjectsPage&fields=*`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					projects: res.data.items
				});
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
							<h1>Portfolio</h1>
							<h2>
								Here are just a few featured projects I’ve worked on outsite of federal government
								consulting.
							</h2>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="12">
							<ProjectsList data={this.state.projects} />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<Foot />
			</div>
		);
	}
}

export default ProjectIndexPage;
