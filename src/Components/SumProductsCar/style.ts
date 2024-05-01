import styled from "styled-components";

export const SumProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  height: 20.2%;
  span {
    width: 100%;
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 2.8rem;
      color: #ffffff;
      font-weight: 700;
    }

    h3 {
      font-size: 2.8rem;
      font-weight: 700;
      color: #ffffff;
    }
  }

  .btn-final {
    display: flex;
    height: 9.7rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    button {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: #000000;
      color: #ffffff;
      align-items: center;
      justify-content: center;
      font-size: 2.8rem;
      font-weight: 700;
      font-family: "Montserrat";
    }
  }
`;
