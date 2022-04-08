import "./App.css";
import styled from "styled-components";
import { useRef } from "react";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 768px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 200px;
  max-width: 768px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridBtnContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.cols === 2) {
      return "1fr 1fr";
    } else {
      return "1fr 1fr 1fr 1fr";
    }
  }};
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
      <ImgContainer>
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
      <ImgContainer ref={synopRef}>
        <CustomImg src="/synopsis.png" alt="synopsis" />
      </ImgContainer>
      <ImgContainer>
        <CustomImg src="/relation_map.png" alt="relation_map" />
      </ImgContainer>
      <ImgContainer ref={castRef}>
        <CustomImg src="/cast.png" alt="cast" />
      </ImgContainer>
      <ImgContainer ref={scheduleRef}>
        <CustomImg src="/schedule.png" alt="schedule" />
      </ImgContainer>
      <ImgContainer ref={locationRef} className="location">
        <CustomImg src="/location_1.png" alt="location" />
      </ImgContainer>
      <ButtonContainer>
        <GridBtnContainer cols={2}>
          <NavButton className="synopsis_btn">
            <a href="http://naver.me/GVAVI1AL">
              <CustomImg src="/naver_btn.png" alt="naver_btn" />
            </a>
          </NavButton>
          <NavButton className="cast_btn">
            <a href="http://kko.to/b8c6vLAse">
              <CustomImg src="/kakao_btn.png" alt="kakao_btn" />
            </a>
          </NavButton>
        </GridBtnContainer>
      </ButtonContainer>
      <ImgContainer className="location">
        <CustomImg src="/location_2.png" alt="location" />
      </ImgContainer>
    </StyledContainer>
  );
}

export default App;
