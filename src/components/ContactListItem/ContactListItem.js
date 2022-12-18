import PropTypes from 'prop-types';
import {
  ListItemStyled,
  DeleteButton,
  ItemText,
  ItemLink,
} from './ContactListItem.styled';
import { TiDelete } from 'react-icons/ti';

export const ContactListItem = ({ name, number, onDeleteContact }) => (
  <ListItemStyled>
    <ItemLink>
      <ItemText>{name}</ItemText>
      <ItemText>{number}</ItemText>
      <DeleteButton type="button" onClick={onDeleteContact}>
        <TiDelete size="20" />
      </DeleteButton>
    </ItemLink>
  </ListItemStyled>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
