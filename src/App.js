import "./App.css";
import styled from "styled-components";
import { useRef } from "react";

const StyledContainer = styled.div`
  width: auto;
  height: auto;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: auto;
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const ButtonContainer = styled.div`
  width: auto;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridBtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const CustomImg = ({ src, alt }) => {
  return (
    <StyledImg
      src={`https://github.com/abys7free/chicago/blob/master/public${src}?raw=true`}
      alt={alt}
    />
  );
};

function App() {
  const synopRef = useRef(null);
  const castRef = useRef(null);
  const scheduleRef = useRef(null);
  const locationRef = useRef(null);

  const onClickHander = (e) => {
    const targetAlt = e.target.alt;
    let targetRef;
    if (targetAlt === "synopsis_btn") {
      targetRef = synopRef;
    } else if (targetAlt === "cast_btn") {
      targetRef = castRef;
    } else if (targetAlt === "schedule_btn") {
      targetRef = scheduleRef;
    } else if (targetAlt === "location_btn") {
      targetRef = locationRef;
    } else {
      return;
    }
    targetRef.current.scrollIntoView();
  };

  return (
    <StyledContainer>
      <ImgContainer height={"100%"}>
        <CustomImg src="/poster.png" alt="poster" />
      </ImgContainer>
      <ButtonContainer>
        <GridBtnContainer>
          <NavButton className="synopsis_btn" onClick={onClickHander}>
            <CustomImg src="/synop_btn.png" alt="synopsis_btn" />
          </NavButton>
          <NavButton className="cast_btn" onClick={onClickHander}>
            <CustomImg src="/cast_btn.png" alt="cast_btn" />
          </NavButton>
          <NavButton className="schedule_btn" onClick={onClickHander}>
            <CustomImg src="/schedule_btn.png" alt="schedule_btn" />
          </NavButton>
          <NavButton className="location_btn" onClick={onClickHander}>
            <CustomImg src="/location_btn.png" alt="location_btn" />
          </NavButton>
        </GridBtnContainer>
      </ButtonContainer>
      <ImgContainer ref={synopRef} height={"100%"}>
        <CustomImg src="/synopsis.png" alt="synopsis" />
      </ImgContainer>
      <ImgContainer height={"100%"}>
        <CustomImg src="/relation_map.png" alt="relation_map" />
      </ImgContainer>
      <ImgContainer ref={castRef} height={"100%"}>
        <CustomImg src="/cast.png" alt="cast" />
      </ImgContainer>
      <ImgContainer ref={scheduleRef} height={"100%"}>
        <CustomImg src="/schedule.png" alt="schedule" />
      </ImgContainer>
      <ImgContainer ref={locationRef} className="location" height={"100%"}>
        <CustomImg src="/location.png" alt="location" />
      </ImgContainer>
    </StyledContainer>
  );
}

export default App;
