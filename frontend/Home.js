//display home page and register button

import { StyledTitle, StyledSubTitle, Avatar, StyledButton,ButtonGroup} from "../componenets/style";
//logo
import Logo from "./assets/favicon.png";

const Home = () => {
    return (
        <div>
            <div style={{
              position: "relative",
              top: 0,
              right: "60 px",
              backgroundColor: "transparent",
              width: "100",
              padding: "40px",
              display: "flex",
              justifyContent: "flex-start"
              

            }}> 
              <Avatar image = {Logo}/>
            </div >
          <StyledTitle size={65}>
            Welcome to Event fest
          </StyledTitle>
          <StyledSubTitle size={27}>
            What are you waiting join me?

          </StyledSubTitle>
          <ButtonGroup>
          <StyledButton to="/Register">Register</StyledButton>
          </ButtonGroup>
        </div>
    );
}

export default Home; 