import styled from "styled-components";

const Wrapper = styled.nav`
  nav {
    background: var(--white);
    height: 64px;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: #400e03;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 1rem;
  }
  .nav-toggle:hover {
    transform: rotate(90deg);
  }
  .logo {
    width: "150px";
    height: 40px;
  }
  .links a {
    color: var(--dark);
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }

  .links-container {
    display: none;
  }
  .show-container {
    height: 10rem;
  }
  @media (min-width: 800px) {
    .nav-center {
      margin: 0 60px;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      display: block;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

export default Wrapper;
