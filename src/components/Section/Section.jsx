// import { Header } from 'components/Header';
import PropTypes from 'prop-types';
import { Title , List} from './Section.styled'


function Section({ title, children }) {
  return (
    <List>
      <Title>{title}</Title>
      {children}
    </List>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default Section