import styles from "../Filter/Filter.module.css";
import { connect } from "react-redux";

import { contactsActions, contactsSelectors } from "../../redux/contacts";

const Filter = ({ onFilterValue, value }) => (
  <>
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onFilterValue}
      />
    </label>
  </>
);
const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterValue: (e) =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
