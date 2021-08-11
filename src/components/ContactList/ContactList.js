import { Component } from "react";

import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contactsForList, onDeleteContact } = this.props;
    return (
      <>
        <ul className={styles.list}>
          {contactsForList.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
              <p className={styles.info}>
                {name}: {number}
              </p>
              <button
                className={styles.btn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
