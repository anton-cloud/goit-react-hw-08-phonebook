import { connect } from "react-redux";

import ContactList from "../ContactList/ContactList";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";

const mapDispatchToProps = {
  onDeleteContact: contactsOperations.deleteContact,
  fetchContacts: contactsOperations.fetchContacts,
};

const mapStateToProps = (state) => ({
  contactsForList: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

ContactList.defaultProps = {
  name: "",
  number: "",
  items: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
