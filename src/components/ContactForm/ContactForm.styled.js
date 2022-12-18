import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
width: 700px;
 display: flex;
 justify-content: center;
gap: 10px;
  flex-direction: column;
margin: ${p => p.theme.space[4]}px;

`;

export const Label = styled.label`
 display: flex;
 align-items: center;
 gap: 10px;
color: ${p => p.theme.colors.primary};
transition: color 250ms linear;
&:hover, :focus {
  color: ${p => p.theme.colors.accent};
}

`;

export const Input = styled(Field)`
display: inline-block;
padding: ${p => p.theme.space[3]}px;
width: 200px;
color: ${p => p.theme.colors.primary};
border: 2px solid ${p => p.theme.colors.primary};
border-radius: ${p => p.theme.radii.medium};
font-size: ${p => p.theme.fontSizes[6]};
transition: border 250ms linear;
text-transform: capitalize;
&:first-letter {
    text-transform: uppercase;
}
&:hover, :focus ,:focus-visible{
    outline: none;
    border: 2px solid ${p => p.theme.colors.accent};
}
&::placeholder{
  color: ${p => p.theme.colors.accent};
}
`;

export const ErrorMsg = styled(ErrorMessage)`
color: ${p => p.theme.colors.warning};
font-size: ${p => p.theme.fontSizes[6]};




`;
export const FormBtn = styled.button`
width: 130px;
display: flex;
justify-content: space-between;
align-items: center;
color: ${p => p.theme.colors.primary};
  background-color: transparent;
  /* margin-top: ${p => p.theme.space[4]}px; */
  padding: ${p => p.theme.space[3]}px;
  /* border: 2px solid ${p => p.theme.colors.primary}; */
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.medium};
  transition: color 250ms linear, background-color 250ms linear;
  &:hover{
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.text};
    border: ${p => p.theme.borders.none};
  }
`;