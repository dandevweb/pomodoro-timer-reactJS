import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'blue',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  color: white;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* background-color: ${({ variant }) => buttonVariants[variant]}; */
`
