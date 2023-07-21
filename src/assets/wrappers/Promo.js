import styled from "styled-components";

const Wrapper = styled.section`
  padding: 5rem;
  background: var(--asphalt);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  p {
    width: 343px;
    color: var(--white);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .watch-btn {
    display: none;
    text-transform: uppercase;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .watch-btn2 {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 12px;
    color: #ed1c24;
    padding: 16px;
    width: 100%;
    margin-top: 16px;
  }

  @media screen and (min-width: 806px) {
    p {
      width: 680px;
      font-size: 40px;
    }
    .watch-btn {
      display: block;
      width: 270px;
      padding: 16px 24px;
      color: #ed1c24;
    }
    .watch-btn2 {
      display: none;
    }
  }
`;

export default Wrapper;
