import React from 'react';

import bannerimg from '../assets/images/landingpagebanner.jpg';

import './LandingPage.css'
import {
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Button,
    CardTitle,
    CardSubtitle,
    Label,
    Input,
    InputGroup,
  } from "reactstrap";
  import { AvForm, AvField } from "availity-reactstrap-validation";


const LandingPage = () => {

 return (
     <div>

 <section className="banner-section" >
        <div className="container">
            <div className="banner-wrapper">
            <Col xl="6">
                <div className="banner-content">

                <Card >
                    <CardBody>
                    <h1 className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".1s" ><b>Bringing
                            Health</b> To Life For The Whole Family...</h1>

                    <button type="btn">Hello</button>        
                    <h3 className="card-title"> Doctor Information - Normal</h3>
                <p className="card-title-desc">
                  Enter the id of the doctor to remove.
                </p>
                    </CardBody>
                </Card>
                    <h2 className="wow fadeInDown" data-wow-duration="2s" data-wow-delay=".1s" >Best Medical
                        Clinic
                    </h2>
                    <h1 className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".1s" ><b>Bringing
                            Health</b> To Life For The Whole Family...</h1>
                    <a href="#" className="lab-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" ><span>Get
                            Appoinments <i class="icofont-rounded-double-right"></i></span>
                    </a>
                </div>
            </Col>
            </div>
        </div>
    </section>

         
     </div>
 )



}


export default LandingPage;