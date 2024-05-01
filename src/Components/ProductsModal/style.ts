import styled from "styled-components";

export const StyleDivUl = styled.div`
  display: flex;
  flex-direction: column;
  width: 42rem;
  height: 60rem;
  margin-top: 4rem;

  ul {
    display: flex;
    flex-direction: column;
    width: 42rem;
    height: 100%;
    align-items: center;
    /* justify-content: center; */
    gap: 2rem;
    overflow-x: auto;
    margin-top: 3rem;
    margin-bottom: 4rem;

    li {
      display: flex;
      flex-direction: row;
      width: 38.5rem;
      align-items: center;
      justify-content: center;
      height: 10rem;
      background-color: #ffffff;
      padding: 0 1rem;
      border-radius: 8px;

      .div-main {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        height: 9rem;
        align-items: center;

        .div-img {
          height: 5.7rem;
          width: 4.6rem;

          img {
            height: 100%;
            width: auto;
          }
        }

        h2 {
          width: 11.3rem;
          font-size: 1.3rem;
          font-weight: 400;
          line-height: 1.7rem;
        }

        .div-btn-add-qtd {
          display: flex;
          flex-direction: column;
          width: 5rem;
          height: 1.9rem;

          #span-h3 {
            font-size: 0.6rem;
          }
          #div-btns {
            display: flex;
            flex-direction: row;
            height: 1.9rem;
            justify-content: center;
            align-items: center;
            border: 1px solid #bfbfbf;
            border-radius: 5px;


            #btn-any-less {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.8rem;
              width: 1.6rem;
              height: 100%;
              margin: 0;
            }

            #number-qtd {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.8rem;
              height: 1rem;
              margin-top: 0.3rem;
              border-right: 0.2px solid #BFBFBF;
              border-left: 0.2px solid #BFBFBF;
              width: 2rem;
              margin-bottom: 0.3rem;
            }
            #btn-plus {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 1.6rem;
              font-size: 0.8rem;
              margin: 0;
            }
          }
        }

        #btn-add-or-remove-product {
          width: 5rem;
          height: 1.9rem;
        }

        p {
          height: 1.7rem;
          width: 6.2rem;
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.7rem;
        }

        .btn-remove-product{
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000000;
          color: #ffffff;
          position: absolute;
          margin-top: -9rem;
          margin-left: 36.3rem;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
        }
      }
    }
  }
`;
