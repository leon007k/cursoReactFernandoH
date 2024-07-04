import PropTypes from "prop-types";
import { ListOfMessages } from "../const";

function getListOfMessages(id) {
  const messages = ListOfMessages.find(message => message.id === id);
  return { autorMessage: messages.name, messages: messages.message };
}

export default function FirstApp({ title = 'Hello World from FirstApp', subtitle = 'This is a subtitle' }) {

  const { autorMessage, messages } = getListOfMessages(2);

  return (
    <>
      <h2 data-testid="test-title">{title}</h2>
      <h3>{subtitle}</h3>
      <h3>{subtitle}</h3>
      <p>
        Autor: {autorMessage}
        <br />
        Mensaje: {messages}
      </p>

    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

/*
  * Se remueven por el warning:
  ! FirstApp: Support for defaultProps will be removed from function components in a future major release.
  ! Use JavaScript default parameters instead
FirstApp.defaultProps = {
  title: 'Hello World from FirstApp',
  subtitle: 'This is a subtitle'
} */
