import React from 'react';
import Grid from "react-bootstrap/es/Grid";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";
import axios from 'axios';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/es/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/es/ToggleButton";
import Button from "react-bootstrap/es/Button";
class EntryForm extends React.Component {
  measure =  {

  }
  constructor(props) {
    super(props);
    this.state = {
      arm: '',
      belt: '',
      calf: '',
      chest: '',
      measureType: 'CM',
      saveData: new Date(),
      stomach: '',
      waist: '',
      thigh: ''
    };
  }

  doInput = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  changeMeasureType = (mt) => {
    this.setState({measureType: mt})
  }

  doPost = () => {
    const {arm, belt, calf, chest, measureType, saveData, stomach, thigh, waist} = this.state;
    axios.post('http://localhost:3000/post-stuff/add', {arm: arm, belt: belt, calf: calf, chest: chest,
      measureType: measureType, saveData: saveData, stomach: stomach, thigh: thigh, waist: waist})
      .then(val => console.log("Yes that was success"));
  }

  render() {
    const {arm, belt, calf, chest, measureType, saveData, stomach, thigh, waist} = this.state;
    return (
      <Grid>
        <Row><h2>Do the measurements</h2></Row>
        <form>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Arms</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='arm' value={arm} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Belt</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='belt' value={belt} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Calves</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='calf' value={calf} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Chest</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='chest' value={chest} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Measure Type</p>
            </Col>
            <Col sm={6} md={3}>
              <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="measureType" value={measureType} onChange={this.changeMeasureType}>
                  <ToggleButton value='CM'>CM</ToggleButton>
                  <ToggleButton value='IN'>IN</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Stomach</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='stomach' value={stomach} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Thighs</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='thigh' value={thigh} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={1}>
              <p>Waist</p>
            </Col>
            <Col sm={6} md={3}>
              <input type='text' name='waist' value={waist} onChange={this.doInput}/>
            </Col>
          </Row>
          <Row><Button bsStyle='primary' onClick={this.doPost}>Push It</Button></Row>
        </form>
      </Grid>
    );
  }
}

export default EntryForm;
