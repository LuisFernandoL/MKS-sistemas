import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: #0f52ba;
  height: 10rem;
  align-items: center;

  .div-main-header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5rem;
  }

  .div-main-header #div-img {
    display: flex;
    flex-direction: row;
    height: 4.4rem;
    align-items: flex-end;
    gap: 1rem;
    #span-img {
      display: flex;
      img {
        display: flex;
        align-items: center;
        height: 4.4rem;
        width: 12.8rem;
      }
    }

    #div-h1 {
      display: flex;
      height: 4.4rem;
      align-items: end;

      #logo-sistemas {
        display: flex;
        align-items: end;
        height: 2rem;
        width: 10rem;
      }
    }
  }
  .div-car {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 9rem;
    height: 4.5rem;
    background-color: #ffffff;
    border-radius: 0.8rem;

    .btn-car{
      height: 1.8rem;
      #img-car{
        height: 1.7rem;
      }
    }

    p{
      font-size: 1.8rem;
      font-weight: 700;
      color: #000000;
    }
  }
`;
