import React from "react";
import { Row, Col } from "reactstrap";
import "./index.css";

const Stage = props=> (
<Col xs="12" md={props.size}>
    <div className="ws-dashboard_stages-title">{props.title}</div>
    <div className="ws-dashboard_stages-cards">Card list</div>
</Col>
);
const Dashboard = (props) => (
<Row>
    {props.stages.map((stage => 
        <Stage {...stage} />
        ))}
</Row>
); 


export default Dashboard;
