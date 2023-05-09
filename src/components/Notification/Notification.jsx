import PropTypes from 'prop-types';

export const Notification = ({msg}) => {
  return (
    <p>{msg}</p>
  )
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired
}
export default Notification