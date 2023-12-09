import styled from 'styled-components';
export const DeleteBtnContact = styled.button`
  &: hover {
    background-color: teal;
  }
`;
export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
