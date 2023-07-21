import styled from "styled-components";

const Wrapper = styled.aside`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: var(--white);
    height: 64px;
  }
  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: #400e03;
  }
  .close-btn:hover {
    color: gray;
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .link-container {
    width: 100%;
  }
  .links-item {
    display: flex;
    width: 100%;
    padding: 0px 24px;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .links-item a {
    color: var(--white);
  }
  .links-item .icon {
    cursor: pointer;
    width: 16px;
    height: 16px;
    color: var(--white);
  }

  .line {
    height: 1px;
    background: #525252;
  }
  .sidebar {
    position: fixed;
    top: 0;
    z-index: 999;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark);
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: var(--clr-red-dark);
    transition: var(--transition);
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
  }
  @media (min-width: 806px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Wrapper;
