import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const ComponentsNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="cubes" className="grey-text" /> Components
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/components/badge" title="Badge" />
              <MenuLink to="/components/buttons" title="Buttons" />
              <MenuLink to="/components/cards" title="Cards" />
              <MenuLink to="/components/dropdown" title="Dropdown" />
              <MenuLink to="/components/list-group" title="List group" />
              <MenuLink to="/components/media" title="Media" />
              <MenuLink to="/components/panels" title="Panels" />
              <MenuLink to="/components/pagination" title="Pagination" />
              <MenuLink to="/components/progress" title="Progress" />
              <MenuLink to="/components/search" title="Search" />
              <MenuLink to="/components/spinner" title="Loader/Spinner" />
              {/* PRO-START */}
              <h6 className="mt-3 grey-text">PRO</h6>
              <MenuLink to="/components/pro/buttons" title="Buttons" />
              <MenuLink to="/components/pro/cards" title="Cards" />
              <MenuLink to="/components/pro/chips" title="Chips" />
              <MenuLink to="/components/pro/dropdown" title="Material Dropdown" />
              <MenuLink to="/components/pro/spinner" title="Loader/Spinner" />
              <MenuLink to="/components/pro/search" title="Search" />
              <MenuLink to="/components/pro/socialbuttons" title="Social Buttons" />
              <MenuLink to="/components/pro/stepper" title="Stepper" />
              <MenuLink to="/components/pro/tabs" title="Tabs" />
              {/* PRO-END */}
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ComponentsNavPage;
