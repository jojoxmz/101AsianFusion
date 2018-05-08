import API from '../../utils/API';
import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, TabPane, TabContent, Nav, NavItem, NavLink, Fa } from 'mdbreact';
import classnames from 'classnames';


export default class Menupage extends Component {
  constructor(props) {
    super(props);

    this.toggleOuterTabs = this.toggleOuterTabs.bind(this);
    this.toggleInnerPills = this.toggleInnerPills.bind(this);
    this.state = {
      activeItemOuterTabs: '1',
      activeItemInnerPills: '1',
    };
  }
  toggleOuterTabs(tab) {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  }
  toggleInnerPills(tab) {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  }
  render() {
    return (
      <Router>
        <div className="mt-4">
          <div className="row">
            <div className="col-md-12">
            <h2 className="mt-5">Pills within the tabs</h2>
            <Nav tabs className="nav-justified" color="indigo">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '1' })} onClick={() => { this.toggleOuterTabs('1'); }} role="tab">
                  <Fa icon="user"/> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '2' })} onClick={() => { this.toggleOuterTabs('2'); }} role="tab">
                  <Fa icon="heart"/> Follow
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="card" activeItem={this.state.activeItemOuterTabs}>
                <TabPane tabId="1" role="tabpanel">
                  <Row>
                  <Col md="3">
                    <Nav pills color="primary" className="flex-column">
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }}>Downloads <Fa icon="download" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} onClick={() => { this.toggleInnerPills('2'); }}>Orders & invoices<Fa icon="file-text" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} onClick={() => { this.toggleInnerPills('3'); }}>Billing Details<Fa icon="address-card" className="ml-2"/></NavLink>
                    </NavItem>
                    </Nav>
                  </Col>
                  <Col md="9">
                    <TabContent activeItem={this.state.activeItemInnerPills}>
                      <TabPane tabId="1">
                        <CardBody>
                          <CardTitle>Downloads</CardTitle>
                          <CardText>Completely legal</CardText>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="2">
                        <CardBody>
                          <CardTitle>Orders & Invoices</CardTitle>
                          <CardText>"Hello? Is it me you're looking for?"</CardText>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="3">
                        <CardBody>
                          <CardTitle>Billing Details</CardTitle>
                          <CardText>Time to pay <Button className="ml-3" color="secondary">pay</Button></CardText>
                        </CardBody>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2" role="tabpanel">
                  <Row>
                    <Col md="6">
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </CardBody>
                    </Col>
                    <Col md="6">
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </CardBody>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
