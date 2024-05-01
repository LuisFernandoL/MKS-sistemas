import styled from "styled-components";

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;

  .list-product {
    display: flex;
    flex-direction: column;
    width: 21.7rem;
    height: 29rem;
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.2rem 0.5rem 0.4rem rgb(0, 0, 0, 0.25);

    .div-img {
      display: flex;
      width: 21.5rem;
      align-items: center;
      justify-content: center;

      img {
        width: auto;
        height: 13.8rem;
      }
    }

    #div-price-name {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 1.6rem;
        text-align: initial;
        font-family: "Montserrat";
        font-weight: 400;
        line-height: 2rem;
        color: #2c2c2c;
        padding: 0 1rem 0 0;
      }
      h2 {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-family: "Montserrat";
        font-weight: 700;
        height: 2.6rem;
        color: #ffffff;
        background-color: #373737;
        padding: 0 0.8rem;
        border-radius: 5px;
      }
    }

    #span-description {
      font-size: 1rem;

      padding: 0 1rem;
      color: #2c2c2c;
      h3 {
        font-family: "Montserrat";
        font-weight: 300;
        text-align: initial;
        line-height: 1.2rem;
      }
    }

    #div-button {
      width: 100%;
      display: flex;
      height: 100%;
      align-items: flex-end;
      justify-content: center;

      button {
        display: flex;
        background-color: #0f52ba;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 4rem;
        border-radius: 0 0 8px 8px;
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.8rem;
        font-family: "Montserrat";
      }
    }
  }
`;
