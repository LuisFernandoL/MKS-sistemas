import styled from "styled-components";

export const StyleList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  ul {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;
