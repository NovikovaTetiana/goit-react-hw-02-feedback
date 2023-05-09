import { Component } from "react";
import { Header } from "./Header";
import FeedbackOptions from "./FeedbackOptions";


 export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

countTotalFeedback(){
  const {good, neutral, bad} = this.state;
  return good + neutral + bad
}

countPositiveFeedbackPercentage({good} ){
  Math.round((good*100)/this.countTotalFeedback(this.state))

}

handelLeaveFeedback = el => this.setState(prev => ++prev[el]);

  render(){
    return(
<div>
<Header title="Please leave feedback" />
<FeedbackOptions options={['good','neutral', 'bad']} onLeaveFeedback={this.handelLeaveFeedback}/>
</div>
)
  }
}
