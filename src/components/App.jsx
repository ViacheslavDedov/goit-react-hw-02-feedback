import { Component } from "react";
import Section from './Section';
import Statistics from '/Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";




export const App = () => {
  return (
    <>
    <Section title="Please leave feedback">

        <FeedbackOptions 
            // options={options} 
            // onLeaveFeedback={onLeaveFeedback}>
        />
        
    </Section>

    <Section title="Statistic">
        
        <Statistics 
            good={good}
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={positivePercentage}
        />
          
          <Notification message="There is no feedback"/>

      </Section>
    </>
  );
};
