// import { Component } from "react";
// import Section from './Section';
// import Statistics from '/Statistics';
// import FeedbackOptions from "./FeedbackOptions";
// import Notification from "./Notification";


// export class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     countTotalFeedback() {
//         return this.state.good + this.state.neutral + this.state.bad;
//     }

//     countPositiveFeedbackPercentage() { 
//         return this.state.good / this.countTotalFeedback();
//     }

//     onLeaveFeedback() {
//         return ;
//     }

// render() {
//         const {good, neutral, bad} = this.state;
//         const total = this.countTotalFeedback();
//         const positivPercentage = this.countPositiveFeedbackPercentage();

//     return (
//         <>
//         <Section title="Please leave feedback">

//             <FeedbackOptions 
//                 options={['good', 'neutral', 'bad']} 
//                 onLeaveFeedback={this.onLeaveFeedback}
//             />
            
//         </Section>

//         <Section title="Statistic">
//             {this.countTotalFeedback ()> 0 ?
//                 (<Statistics 
//                 good={good}
//                 neutral={neutral} 
//                 bad={bad} 
//                 total={total} 
//                 positivePercentage={positivePercentage} />)
//                 : (<Notification message="There is no feedback" />)
//                 }
            
//         </Section>
//         </>
//         );
//     }
  
// };
