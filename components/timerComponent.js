import React from "react";
import logo from "../public/clockImage.png";
import Image from "next/image";
import styles from "../styles/Timer.module.css";

class TimerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      timeLeft: 0,
      workingTime: "",
      restingTime: "",
      wTime: "",
      rTime: "",
      submitState: "Start",
    };

    this.start = this.start.bind(this);
    this.workInterval = this.workInterval.bind(this);
    this.restInterval = this.restInterval.bind(this);
    this.set = this.set.bind(this);
    this.handleRTime = this.handleRTime.bind(this);
    this.handleWTime = this.handleWTime.bind(this);
  }

  handleWTime(e) {
    this.setState({
      timeLeft: 0,
      workingTime: this.state.workingTime,
      restingTime: this.state.restingTime,
      wTime: e.target.value,
      rTime: this.state.rTime,
      submitState: this.state.submitState,
    });
  }

  handleRTime(e) {
    this.setState({
      timeLeft: 0,
      workingTime: this.state.workingTime,
      restingTime: this.state.restingTime,
      wTime: this.state.wTime,
      rTime: e.target.value,
      submitState: this.state.submitState,
    });
  }

  start(e) {
    e.preventDefault();
    // var work = document.forms["custom"]["wtime"].value;
    // var rest = document.forms["custom"]["rtime"].value;

    if (this.state.submitState == "Start") {
      //   document.getElementById("work-time").innerHTML = work;
      //   document.getElementById("rest-time").innerHTML = rest;
      //   document.getElementById("submit").value = "Stop";
      this.setState({
        timeLeft: 0,
        workingTime: this.state.wTime,
        restingTime: this.state.rTime,
        wTime: this.state.wTime,
        rTime: this.state.rTime,
        submitState: "Stop",
      });
      this.workInterval();
    } else if (this.state.submitState == "Stop") {
      //   document.getElementById("work-time").innerHTML = work;
      //   document.getElementById("rest-time").innerHTML = rest;
      //   document.getElementById("submit").value = "Stop";
      this.setState({
        timeLeft: 0,
        workingTime: 0,
        restingTime: 0,
        wTime: this.state.wTime,
        rTime: this.state.rTime,
        submitState: "Start",
      });
    }
  }

  workInterval() {
    var currTime = 0;
    var work = this.state.wTime;
    var x = setInterval(function () {
      var setTime = work * 60 * 1000;
      currTime++;
      var timeLeft = setTime - currTime * 1000;
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (minutes < 10 && seconds < 10) {
        this.setState({
          timeLeft: 0,
          workingTime: "0" + minutes + ":" + "0" + seconds,
          restingTime: this.state.restingTime,
          wTime: this.state.rTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      } else if (minutes < 10 && seconds >= 10) {
        this.setState({
          timeLeft: 0,
          workingTime: "0" + minutes + ":" + seconds,
          restingTime: this.state.restingTime,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      } else if (minutes >= 10 && seconds < 10) {
        this.setState({
          timeLeft: 0,
          workingTime: minutes + ":" + "0" + seconds,
          restingTime: this.state.restingTime,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      } else
        this.setState({
          timeLeft: 0,
          workingTime: minutes + ":" + seconds,
          restingTime: this.state.restingTime,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      if (timeLeft <= 0) {
        clearInterval(x);
        this.setState({
          timeLeft: 0,
          workingTime: this.state.wTime,
          restingTime: this.state.restingTime,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
        this.restInterval();
      } else if (this.state.submitState == "Start") {
        document.getElementById("work-time").innerHTML = "";
        this.setState({
          timeLeft: 0,
          workingTime: "",
          restingTime: this.state.restingTime,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
        clearInterval(x);
      }
    }, 1000);
  }

  restInterval() {
    var currTime = 0;
    var rest = this.state.rTime;
    var x = setInterval(function () {
      var setTime = rest * 60 * 1000;
      currTime++;
      var timeLeft = setTime - currTime * 1000;
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (minutes < 10 && seconds < 10)
        this.setState({
          timeLeft: 0,
          workingTime: this.state.workingTime,
          restingTime: "0" + minutes + ":" + "0" + seconds,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      else if (minutes < 10 && seconds >= 10)
        this.setState({
          timeLeft: 0,
          workingTime: this.state.workingTime,
          restingTime: "0" + minutes + ":" + seconds,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      else if (minutes >= 10 && seconds < 10)
        this.setState({
          timeLeft: 0,
          workingTime: this.state.workingTime,
          restingTime: minutes + ":" + "0" + seconds,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
      else
        document.getElementById("rest-time").innerHTML =
          minutes + ":" + seconds;
      this.setState({
        timeLeft: 0,
        workingTime: this.state.workingTime,
        restingTime: minutes + ":" + seconds,
        wTime: this.state.wTime,
        rTime: this.state.rtime,
        submitState: this.state.submitState,
      });
      if (timeLeft <= 0) {
        clearInterval(x);
        this.setState({
          timeLeft: 0,
          workingTime: this.state.workingTime,
          restingTime: this.state.rTime,
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
        workInterval();
      } else if (this.state.submitState == "Start") {
        this.setState({
          timeLeft: 0,
          workingTime: this.state.workingTime,
          restingTime: "",
          wTime: this.state.wTime,
          rTime: this.state.rTime,
          submitState: this.state.submitState,
        });
        clearInterval(x);
      }
    }, 1000);
  }

  set(x) {
    if (x == 52) {
      this.setState({
        timeLeft: 0,
        workingTime: 0,
        restingTime: 0,
        wTime: "52",
        rTime: "17",
      });
    } else if (x == 25) {
      this.setState({
        timeLeft: 0,
        workingTime: 52,
        restingTime: 17,
        wTime: "25",
        rTime: "5",
      });
    }
  }

  render() {
    return (
      <>
        <div className={styles.sidebar}>
          <span className={styles.timer}>Timer Presets:</span>
          <br></br>
          <button type="button" onClick={this.set(52)}>
            <span id="52">52/17 Rule</span>
          </button>
          <br></br>
          <button type="button" onClick={this.set(25)}>
            <span id="Pomo">Pomodoro</span>
          </button>
          <br></br>
          <form name="custom" onSubmit={this.start}>
            <label>Custom:</label>
            <br></br>
            <input
              type="text"
              id="wtime"
              name="wtime"
              value={this.state.wTime}
              onChange={this.handleWTime}
            />
            <br></br>
            <input
              type="text"
              id="rtime"
              name="rtime"
              value={this.state.rTime}
              onChange={this.handleRTime}
            />
            <br></br>
            <input
              type="submit"
              id="submit"
              value={this.state.submitState}
            ></input>
          </form>
        </div>
        <Image className={styles.clockPicture} src={logo} />
        <div className={styles.times}>
          <span id={styles.work}>Work time:</span>
          <span id={styles.workTime}>{this.state.workingTime}</span>
          <span id={styles.rest}>Rest time:</span>
          <span id={styles.restTime}>{this.state.restingTime}</span>
        </div>
      </>
    );
  }
}

export default TimerComponent;
