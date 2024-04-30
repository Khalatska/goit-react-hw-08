import css from "./Contact.module.css";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.container}>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <b>
          <p>🖊 {contact.name}</p>
        </b>
        <p>📞 {contact.number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
