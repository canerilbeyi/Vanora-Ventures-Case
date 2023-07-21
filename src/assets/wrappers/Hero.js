import styled from "styled-components";
import hero from "./../Hero.jpg";
const Wrapper = styled.div`
  background: url(${hero}) center/cover no-repeat;
  height: 300px;
  display: grid;
  place-content: center;
  color: white;
  .text-container {
    width: 343px;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .btn-container {
    display: flex;
    justify-content: center;
  }
  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    color: var(--red-default);
    padding: 16px 24px;
  }
  p {
    color: var(--white);
    text-align: center;
    width: 373px;
    font-size: 36px;
    font-weight: 700;
  }
`;
export default Wrapper;
