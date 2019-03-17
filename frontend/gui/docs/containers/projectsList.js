import React from 'react';
import { Link } from 'react-router-dom';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBIcon,
	MDBBtn,
	MDBView,
	MDBMask
} from 'mdbreact';

import '../index.css';

const ProjectList = (props) => {
	let data = props.data;
	console.log(data);
	return (
		<MDBContainer>
			<MDBRow className="text-center">
				{data.map((data) => (
					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<section key={data.id}>
							<MDBView className="overlay rounded z-depth-1" waves>
								<img src={data.project_image_url.url} alt="" className="img-fluid" />
								<a href="/#!">
									<MDBMask overlay="white-slight" />
								</a>
							</MDBView>
							<MDBCardBody className="pb-0">
								<h2 className="font-weight-bold my-3">{data.project_h_one}</h2>
								<p className="grey-text">{data.project_h_two}</p>
								<Link to={`/projects/${data.id}`}>
									<MDBBtn outline className="evro-navy-btn">
										View Project Details
									</MDBBtn>
								</Link>
							</MDBCardBody>
						</section>
					</MDBCol>
				))}
			</MDBRow>
		</MDBContainer>
	);
};

export default ProjectList;
