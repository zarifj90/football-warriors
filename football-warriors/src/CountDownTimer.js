import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.css';
import { Row, Grid, Col } from 'react-bootstrap';

class CountDownTimer extends Component {
  constructor() {
    super();
    this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  countDown() {
    var countDownDate = new Date("June 14, 2018 00:00:00").getTime();
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  render() {
    return(
      <div>
        <div className="App">
          <Grid>
            <Row>
              <Col xs={6} md={6}>
                <span>{this.state.days} days</span>
              </Col>
              <Col xs={6} md={6}>
                <span>{this.state.hours} hours</span>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col xs={6} md={6}>
                <span>{this.state.minutes} minutes</span>
              </Col>
              <Col xs={6} md={6}>
               <span>{this.state.seconds} seconds</span>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
      );
  }
}

export default CountDownTimer;
