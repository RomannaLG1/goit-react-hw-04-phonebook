import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';
import { ContactListStyled } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactListStyled>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      ></ContactListItem>
    ))}
  </ContactListStyled>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
