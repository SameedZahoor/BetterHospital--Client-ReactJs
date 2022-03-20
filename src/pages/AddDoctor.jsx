import React ,{useState} from 'react'

import Breadcrumbs from "../../src/components/Common/Breadcrumb"

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
    InputGroup
  } from "reactstrap"
  import { AvForm, AvField } from "availity-reactstrap-validation"

  import "flatpickr/dist/themes/material_blue.css";
  import Flatpickr from "react-flatpickr";


  import Select from "react-select";
  const optionGroup = [
    {
      label: "Gender",
      options: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Others", value: "Others" },
      ],
    }
  ];



const  AddDoctor = ()=> {

    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }


    const [fnm, setfnm] = useState(false)
    const [lnm, setlnm] = useState(false)
    const [unm, setunm] = useState(false)
    const [city, setcity] = useState(false)
    const [stateV, setstateV] = useState(false)
  
    function handleSubmit(e) {
      e.preventDefault()
  
      var fnm = document.getElementById("validationTooltip01").value
      var lnm = document.getElementById("validationTooltip02").value
      var unm = document.getElementById("validationTooltipUsername").value
      var city = document.getElementById("validationTooltip03").value
      var stateV = document.getElementById("validationTooltip04").value
  
      if (fnm === "") {
        setfnm(false)
      } else {
        setfnm(true)
      }
  
      if (lnm === "") {
        setlnm(false)
      } else {
        setlnm(true)
      }
  
      if (unm === "") {
        setunm(false)
      } else {
        setunm(true)
      }
  
      if (city === "") {
        setcity(false)
      } else {
        setcity(true)
      }
  
      if (stateV === "") {
        setstateV(false)
      } else {
        setstateV(true)
      }
  
      var d1 = document.getElementsByName("validate")
  
      document.getElementById("tooltipForm").classList.add("was-validated")
  
      for (var i = 0; i < d1.length; i++) {
        d1[i].style.display = "block"
      }
    }
  
    //for change tooltip display propery
    function changeHandeler(event, eleId) {
      if (event.target.value !== "")
        document.getElementById(eleId).style.display = "none"
      else document.getElementById(eleId).style.display = "block"
    }


    return (
    <React.Fragment>
    <div className="page-content">
       
    <Breadcrumbs title="Doctors" breadcrumbItem="Add Doctor" />
     
    <Row>
            <Col xl="8">
              <Card>
                <CardBody>
                  <h4 className="card-title"> Bio Information  - Normal</h4>
                  <p className="card-title-desc">
                    Enter the information of the person in the given below
                    form.
                  </p>
                  <AvForm className="needs-validation">
                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom01">First name</Label>
                          <AvField
                            name="firstname"
                            placeholder="First name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom02">Last name</Label>
                          <AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </div>
                      </Col>
                      
                    </Row>
                    
                    <Row>
                    <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom01">CNIC -Govt Id</Label>
                          <AvField
                            name="firstname"
                            placeholder="*****-*******-*"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                    </Col>
                    </Row>

                    <Row>
                    <Col md="6">
                        <div className="mb-3">
                          <Label htmlFor="validationCustom01">Phone No.</Label>
                          <AvField
                            name="firstname"
                            placeholder="****-*******"
                            type="text"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                    </Col>
                    </Row>  

                    <Row>
                    <Col md="3">
                        <div className="mb-3">
                          
                    <AvField
                      className="mb-3"
                      name="digits"
                      label="Age  "
                      placeholder="21"
                      type="number"
                      errorMessage="Enter Only Digits"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Digits",
                        },
                      }}
                    />
                        </div>
                    </Col>

                    <Col md="3">
                    <div className="mb-3">
                    <Label>Gender</Label>
                    <Select
                      value={selectedGroup}
                      onChange={() => {
                        handleSelectGroup();
                      }}
                      options={optionGroup}
                      classNamePrefix="select2-selection"
                    />
                  </div>

               </Col>
                    </Row>  

                   <Row >
                   <Col md="3">
                  <FormGroup className="mb-4">
                    <Label>Date of Birth</Label>
                    <InputGroup>
                      <Flatpickr
                        className="form-control d-block"
                        placeholder="dd M,yyyy"
                        options={{
                          mode: "range",
                          dateFormat: "Y-m-d",
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  </Row> 



                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                        required />{" "}
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                                        </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                                        </div>
                    </div>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </AvForm>
                </CardBody>
              </Card>
            </Col>    
    </Row>     
  
              
    </div>
    
    </React.Fragment>
  )
}



export default AddDoctor;