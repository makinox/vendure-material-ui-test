import { styled } from 'styled-components';

export const ProductArticleStyled = styled.article`
  position: relative;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  & img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
