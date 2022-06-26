import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/logo.svg";
import Laptop from "./images/laptop2.svg";
import LinkedIn from "./images/linkedin.svg";
import Github from "./images/github.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/9yBAq8hPQ3WD4Rg6/scene.splinecode"
      />
      <Content>
        <h1>Monitor nano-sats</h1>
        <p>
          Consolidate all your Nanosatellite information in one place. Monitor
          status, send and receive telecommands on an easy to use dashboard.
          Review received data. <br />
          Join the private beta.
        </p>
        <button>
          <img src={Laptop} alt="Download" /> Download for Windows
        </button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }
`;
