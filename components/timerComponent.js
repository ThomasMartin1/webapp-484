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
    this.set52 = this.set52.bind(this);
    this.set25 = this.set25.bind(this);
    this.handleRTime = this.handleRTime.bind(this);
    this.handleWTime = this.handleWTime.bind(this);
  }

  handleWTime(e) {
    this.setState((prevState) => {
      return {
        timeLeft: 0,
        workingTime: prevState.workingTime,
        restingTime: prevState.restingTime,
        wTime: e.target.value,
        rTime: prevState.rTime,
        submitState: prevState.submitState,
      };
    });
  }

  handleRTime(e) {
    this.setState((prevState) => {
      return {
        timeLeft: 0,
        workingTime: prevState.workingTime,
        restingTime: prevState.restingTime,
        wTime: prevState.wTime,
        rTime: e.target.value,
        submitState: prevState.submitState,
      };
    });
  }

  start(e) {
    e.preventDefault();

    if (this.state.submitState == "Start") {
      this.setState((prevState) => {
        return {
          timeLeft: 0,
          workingTime: prevState.wTime,
          restingTime: prevState.rTime,
          wTime: prevState.wTime,
          rTime: prevState.rTime,
          submitState: "Stop",
        };
      });
      this.workInterval();
    } else if (this.state.submitState == "Stop") {
      //   document.getElementById("work-time").innerHTML = work;
      //   document.getElementById("rest-time").innerHTML = rest;
      //   document.getElementById("submit").value = "Stop";
      this.setState((prevState) => {
        return {
          timeLeft: 0,
          workingTime: "",
          restingTime: "",
          wTime: prevState.wTime,
          rTime: prevState.rTime,
          submitState: "Start",
        };
      });
    }
  }

  workInterval() {
    var currTime = 0;
    var work = parseInt(this.state.wTime);
    var x = setInterval(() => {
      var setTime = work * 60 * 1000;
      currTime++;
      var timeLeft = setTime - currTime * 1000;
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (minutes < 10 && seconds < 10) {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: "0" + minutes + ":" + "0" + seconds,
            restingTime: prevState.restingTime,
            wTime: prevState.rTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      } else if (minutes < 10 && seconds >= 10) {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: "0" + minutes + ":" + seconds,
            restingTime: prevState.restingTime,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      } else if (minutes >= 10 && seconds < 10) {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: minutes + ":" + "0" + seconds,
            restingTime: prevState.restingTime,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: minutes + ":" + seconds,
            restingTime: prevState.restingTime,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      }
      if (timeLeft <= 0) {
        clearInterval(x);
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.wTime,
            restingTime: prevState.restingTime,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
        this.restInterval();
      } else if (this.state.submitState == "Start") {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: "",
            restingTime: prevState.restingTime,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
        clearInterval(x);
      }
    }, 1000);
  }

  restInterval() {
    var currTime = 0;
    var rest = this.state.rTime;
    var x = setInterval(() => {
      var setTime = rest * 60 * 1000;
      currTime++;
      var timeLeft = setTime - currTime * 1000;
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (minutes < 10 && seconds < 10)
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.workingTime,
            restingTime: "0" + minutes + ":" + "0" + seconds,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      else if (minutes < 10 && seconds >= 10)
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.workingTime,
            restingTime: "0" + minutes + ":" + seconds,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      else if (minutes >= 10 && seconds < 10)
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.workingTime,
            restingTime: minutes + ":" + "0" + seconds,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
      else {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.workingTime,
            restingTime: minutes + ":" + seconds,
            wTime: prevState.wTime,
            rTime: prevState.rtime,
            submitState: prevState.submitState,
          };
        });
      }
      if (timeLeft <= 0) {
        clearInterval(x);
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.workingTime,
            restingTime: prevState.rTime,
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
        this.workInterval();
      } else if (this.state.submitState == "Start") {
        this.setState((prevState) => {
          return {
            timeLeft: 0,
            workingTime: prevState.workingTime,
            restingTime: "",
            wTime: prevState.wTime,
            rTime: prevState.rTime,
            submitState: prevState.submitState,
          };
        });
        clearInterval(x);
      }
    }, 1000);
  }

  set52() {
    this.setState((prevState) => {
      return {
        timeLeft: 0,
        workingTime: prevState.workingTime,
        restingTime: prevState.restingTime,
        wTime: "52",
        rTime: "17",
        submitState: prevState.submitState,
      };
    });
  }

  set25() {
    this.setState((prevState) => {
      return {
        timeLeft: 0,
        workingTime: prevState.workingTime,
        restingTime: prevState.restingTime,
        wTime: "25",
        rTime: "5",
        submitState: prevState.submitState,
      };
    });
  }

  render() {
    return (
      <>
        <div className={styles.sidebar}>
          <span className={styles.timer}>Timer Presets:</span>
          <br></br>
          <button type="button" onClick={this.set52}>
            <span id="52">52/17 Rule</span>
          </button>
          <br></br>
          <button type="button" onClick={this.set25}>
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
