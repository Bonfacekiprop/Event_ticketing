//display home page and register button
import React, { useEffect, useState } from "react";
import { useCanister } from "@connect2ic/react";
import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "./Styled";
import Logo from "./assets/favicon.png";

const Home = () => {
  const [someData, setSomeData] = useState("");
  const [myCanister] = useCanister("rrkah-fqaaa-aaaaa-aaaaq-cai");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await myCanister.getSomeData();
        setSomeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [myCanister]);

  return (
    <div>
    
      <StyledTitle size={65}>
        Welcome to Event fest
      </StyledTitle>
      <StyledSubTitle size={27}>
        What are you waiting for? Join me!
      </StyledSubTitle>
      <p>Some data from the canister: {someData}</p>
      <ButtonGroup>
        <StyledButton to="/Register">Register</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;