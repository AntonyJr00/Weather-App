import styled from "styled-components";

export const Wrapper = styled.div<{ $color: boolean }>`
  width: 607px;
  min-height: 800px;
  margin: auto;
  padding: 22px;
  border-radius: 12px;
  background-image: ${(props) =>
    props.$color
      ? "linear-gradient(180deg, #130754, #3d2f80)"
      : "linear-gradient(180deg, #0070F5, #B3EAF5)"};
`;

export const TopBar = styled.form`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-top: 30px;
`;

export const Input = styled.input`
  display: flex;
  width: 362px;
  height: 78px;
  background-color: #ebfffc;
  color: #626262;
  border: none;
  outline: none;
  border-radius: 40px;
  padding-left: 40px;
  font-size: 20px;
  font-weight: 400;
`;

export const SearchIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background-color: #ebfffc;
  border-radius: 50%;
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
`;

export const DataText = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const IconData = styled.img`
  margin-top: 10px;
`;
