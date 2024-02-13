import styled from "styled-components";

export const Wrapper = styled.div<{ $color: boolean }>`
  position: relative;
  /* width: 607px; */
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: 30px;
  /* border-radius: 12px; */
  background-image: ${(props) =>
    props.$color
      ? "linear-gradient(180deg, #130754, #3d2f80)"
      : "linear-gradient(180deg, #0070F5, #B3EAF5)"};

  overflow: hidden;
  opacity: 0.9;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.3;

    background-image: ${(props) =>
      props.$color ? "url('assets/furina2.jpg')" : "url('assets/furina.jpg')"};
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const TopBar = styled.form`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-top: 20px;
`;

export const Input = styled.input`
  display: flex;
  width: 80%;
  height: 78px;
  background-color: #ebfffc;
  color: #626262;
  border: none;
  outline: none;
  border-radius: 40px;
  padding-left: 40px;
  font-size: 20px;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
`;

export const SearchIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background-color: #ebfffc;
  border-radius: 50%;
  border: #ebfffc;
  cursor: pointer;
`;

export const WeatherData = styled.div`
  margin-top: 30px;
  color: white;
  display: flex;
  justify-content: center;
`;

export const ElementData = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
export const Data = styled.div`
  font-size: 34px;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
`;

export const DataText = styled.div`
  font-size: 20px;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
`;

export const IconData = styled.img`
  margin-top: 10px;
  color: white;
`;
