import styled from "styled-components";

export const ModalContainerCreate = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  inset: 0;

  width: 100vw;
  height: 100vh;
  flex-direction: column;
  z-index: 1;

  > .div-main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 0.5rem 0.4rem rgb(0, 0, 0, 0.25);

    background-color: #0f52ba;
    width: 48.6rem;
    height: 100vh;
    padding-top: 4rem;

    button {
      margin-top: 1rem;
    }

    .btn-close {
      position: absolute;
      padding: 1rem;
      right: 1.5rem;
      top: 0;
    }

    header {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 4rem;

      width: 100%;

      background-color: #0f52ba;
      color: #000000;

      font-size: 3.2rem;
      font-weight: 700;

      .div-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 5.6rem;
        align-items: center;

        h1 {
          color: #ffffff;
          font-size: 2.7rem;
          width: 14rem;
          word-break: calc(10rem - 10rem);
        }
        .btn-close {
          display: flex;
          height: 3.8rem;
          width: 3.8rem;
          align-items: center;
          justify-content: center;
          background-color: #000000;
          font-size: 2.8rem;
          font-weight: 400;
          color: #ffffff;
          border-radius: 20px;
          font-family: "Montserrat";
          margin-right: 2.4rem;
        }
      }
    }
  }
`;
