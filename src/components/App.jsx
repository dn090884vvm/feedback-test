import React, { Component } from 'react';
import { Statistcs } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const totalMarks = good + bad + neutral;
    return (good / totalMarks) * 100;
  };

  onLeaveFeedback = option => {
    // console.log(option);
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePersentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;
    return (
      <>
        <h1>Please, leave your feedback</h1>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />

        <h2>Statistcs</h2>
        <section>
          {total === 0 ? (
            <div>No statistics yet</div>
          ) : (
            <Statistcs
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePersentage={positivePersentage}
            />
          )}
        </section>
      </>
    );
  }
}

export default App;
