import styled from 'styled-components';
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
`;
export const FormButton = styled.button`
  width: 200px;
  &: hover {
    background-color: teal;
  }
`;
