import React from "react"

class CountDown extends React.Component {
  state = {
    remaining: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    isExpired: false
  };
  
  timer;
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      
      now = new Date().getTime(),

      countDownDate = new Date(targetDate + " " + targetTime).getTime();
    

    this.distance = countDownDate - now;
 
    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((this.distance % (1000 * 60)) / 1000)
        },
        isExpired: false
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
    {targetDate, targetTime} = this.props;
    
    return (
      <div>
        {!isExpired && targetDate && targetTime ? (
          <div>
          <div className="countdown-wrapper">
              <div className="countdown-item">
                  <p>{remaining.days}<span>days</span></p>
              </div>
              <div className="dot">:</div>
              <div className="countdown-item">
                  <p>{remaining.hours}<span>hrs</span></p>
              </div>
              <div className="dot">:</div>
              <div className="countdown-item">
                  <p>{remaining.minutes}<span>min</span></p>
              </div>
              <div className="dot">:</div>
              <div className="countdown-item">
                  <p>{remaining.seconds}<span>sec</span></p>
              </div>
          </div>
      </div>
        ) : (
          <p className="alert-danger">Expired</p>
        )}
      </div> 
    );
  }
}

export default CountDown;
