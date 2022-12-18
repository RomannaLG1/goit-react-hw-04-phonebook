import styled from 'styled-components';

export const ListItemStyled = styled.li`
width: 330px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 5px;

`;
export const ItemLink = styled.a`
width: 300px;
display: flex;
gap: 5px;
padding: ${p => p.theme.space[2]}px;
justify-content: space-between;
transition: background-color 250ms linear;
&:hover, :focus {
    cursor: pointer;
    box-shadow: 3px 3px 3px rgb(0 0 0 / 12%), 3px 3px 3px rgb(0 0 0 / 14%),
      3px 2px 3px rgb(0 0 0 / 20%);
}
`;
export const ItemText = styled.span`
color: ${p => p.theme.colors.primary};
font-size: ${p => p.theme.fontSizes[2]}px;
font-weight: ${p => p.theme.fontWeights.bold};

`

export const DeleteButton = styled.button`
background-color: transparent;
padding: ${p => p.theme.space[1]}px;
color: ${p => p.theme.colors.primary};
border: ${p => p.theme.borders.none};
transition: color 250ms linear;
&:hover, :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.warning};
}
`