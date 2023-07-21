import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 72px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  background-color: var(--background-page);

  .featured-cards {
    column-gap: 24px;
    width: 90vw;
    max-width: 1170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .featured-typography {
    color: var(--dark);
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .carousel {
    overflow: hidden;
  }
  .cards {
    display: flex;
    column-gap: 2rem;
    position: relative;
    left: 0;
    transition: all 0.3s linear;
  }

  .card h4,
  h6 {
    color: var(--dark);
  }

  .round-slider {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    column-gap: 0.5rem;
  }
  .slider-button {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    background: gray;
  }
  .slider-button:hover {
    cursor: pointer;
  }
  .active {
    background: var(--red-default);
  }
  .card {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    transition: var(--transition);
    border: 1px solid transparent;
    color: var(--dark);
    border-radius: 2px;
    border: 1px solid var(--border);
    border-bottom: 4px solid red;
    background: var(--white);
    font-size: 14px;
    font-style: normal;
    height: 235px;
    font-weight: 400;
    position: relative;
    line-height: 160%;
  }
  .btn-container {
    position: absolute;
    bottom: 12px;
    left: 8px;
    right: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 24px;
    column-gap: 8px;
  }
  .left-btn {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    border: none;
    padding: 8px;
    color: var(--red-default);
    background: var(--red-light);
  }
  .right-btn {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    border: none;
    padding: 8px;
    background: var(--red-default);
    color: var(--white);
  }
  .icon {
    cursor: pointer;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--white);
  }
  .arrow {
    cursor: pointer;
    border-radius: 2px;
    background: var(--dark);
    display: flex;
    width: 48px;
    height: 48px;
    padding: 15.5px 16px 16.5px 16px;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
