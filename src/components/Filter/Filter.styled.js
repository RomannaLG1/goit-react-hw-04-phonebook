import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FilterForm = styled(Form) `
width: 700px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const FilterLabel = styled.label`
color: ${p => p.theme.colors.primary};
display: flex;
align-items: center;
transition: color 250ms linear;
&:hover, :focus {
    color: ${p => p.theme.colors.accent};
}
`;

export const FilterInput = styled(Field)`
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

`