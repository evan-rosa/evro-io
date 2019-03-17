import React from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../index.css';
import axios from 'axios';

import ProjectsList from './projectsList';

class ProjectIndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: [],
			project_h_one: [],
			project_h_two: [],
			project_intro_p: [],
			project_h2_date: [],
			project_p: [],
			project_h2_tech_stack: [],
			project_tech_stack_description: [],
			project_image: []
		};
		this.getData = this.getData.bind(this);
	}
	getData() {
		const url = `http://127.0.0.1:8000/api/v2/pages/?type=projects.ProjectsPage&fields=*`;
		axios
			.get(url)
			.then((res) => {
				this.setState({
					id: res.data.items[0].id,
					project_h_one: res.data.items[0].project_h_one,
					project_h_two: res.data.items[0].project_h_two,
					project_intro_p: res.data.items[0].project_intro_p,
					project_h2_date: res.data.items[0].project_h2_date,
					project_p: res.data.items[0].project_p,
					project_h2_tech_stack: res.data.items[0].project_h2_tech_stack,
					project_tech_stack_description: res.data.items[0].project_tech_stack_description,
					project_image: '..' + res.data.items[0].project_image.meta.download_url
				});
				console.log(res.data.items[0].project_image.meta.download_url);
				console.log(res.data.items[0].project_image);
			})
			.catch((error) => this.setState({ error }));
	}

	componentDidMount() {
		this.getData();
	}
	render() {
		return (
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
					<MDBCol md="12" />
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default ProjectIndexPage;
