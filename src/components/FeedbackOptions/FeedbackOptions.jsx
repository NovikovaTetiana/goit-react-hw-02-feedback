import PropTypes from 'prop-types';
import {List, FeedbackItem, Btn } from './FeedbackOptions.styled'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(options => (
        <FeedbackItem key={options}>
         <Btn  onClick={() => onLeaveFeedback(options)}>{options}</Btn>
        </FeedbackItem>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};


