import React from "react";
import styled from "styled-components";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

const ChooseCityLabel = styled.p`
  color: black;
  margin: 10px auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;
  padding-left: 50px;
`;

function CityComponent(props) {
  const { updateCity, fetchWeather } = props;

  return (
    <div>
      <WelcomeWeatherLogo
        src={
          "https://cdn3d.iconscout.com/3d/premium/thumb/weather-3260422-2725115.png"
        }
      />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </div>
  );
}
export default CityComponent;
