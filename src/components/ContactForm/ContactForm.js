import PropTypes from 'prop-types';
import { Component } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Formik} from 'formik';
import { ErrorMsg, FormBtn, FormStyled, Input, Label } from './ContactForm.styled';
import {BsTelephoneForwardFill, BsPersonSquare} from 'react-icons/bs';
import * as yup from 'yup';
import 'yup-phone';

const valName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  }

  schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .matches(
        valName,
        "Name may contain only letters, apostrophe, dash and spaces"
      )
      .required(),
    number: yup.string().phone('UA').required(),
  });

  handleSubmit = (value, { resetForm }) => {
    console.log(value);
    this.props.addContact(value);
    resetForm();
  };

  render() {
    const { state, schema, handleSubmit } = this;
    return (
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <Label htmlFor="name">
            <BsPersonSquare size="30"/>
            <Input type="text" name="name" placeholder="Name"/>
           <ErrorMsg name="name" component="div" />
          </Label>
 
          <Label htmlFor="tel">
            <BsTelephoneForwardFill size="30"/>
            <Input type="tel" name="number" placeholder="Phone"/>
            <ErrorMsg name="number" component="span" />
          </Label>
          <FormBtn type="submit"><AiOutlinePlus size='30'/>Add contact</FormBtn>
        </FormStyled>
      </Formik>
    );
  }
}
