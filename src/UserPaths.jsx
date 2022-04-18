import React from 'react'
import { Link } from "react-router-dom";
import {
  Table,
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
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  CardGroup,
} from "reactstrap";



const UserPaths =()=> {
  return (
    <div>
        UserPaths
        <h1>
          Sign In as Patient
        </h1>

        <h1>
          Sign In as Admin
        </h1>


        <ul className="sub-menu">
                <li><Link to="/ ">{props.t("Dashboard")} 1</Link></li>
                <li><Link to="/dashboard2">{props.t("Dashboard")} 2</Link></li>
        </ul>


    </div>
  )
}


export default UserPaths;
