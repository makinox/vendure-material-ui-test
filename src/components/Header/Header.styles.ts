import { styled } from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 0;

  & img {
    background-color: red;
    padding: 10px;
    height: 30px;
    border-radius: 10px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div button {
    cursor: pointer;
    border-radius: 10px;
    border: 1px red solid;
    padding: 5px 10px 5px 10px;
    background-color: transparent;
  }
`;
