import PropTypes from "prop-types";
import { ListOfMessages } from "../const";

function getListOfMessages(id) {
  const messages = ListOfMessages.find(message => message.id === id);
  return { autorMessage: messages.name, messages: messages.message };
}


export default function FirstApp({ title, subtitle }) {

  const { autorMessage, messages } = getListOfMessages(2);

  return (
    <>
      <h2>{title}</h2>
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
  title: PropTypes.string,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'Hello World from FirstApp',
  subtitle: 'This is a subtitle'
}
