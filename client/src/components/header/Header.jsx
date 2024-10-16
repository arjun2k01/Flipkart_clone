import React from "react";
import { AppBar, Box,Toolbar, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const HeaderStyle = styled(AppBar)`
  background: #2874f0;
  height: 64px;
`;

const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`
const CustomButtonWrapper = styled(Box)`
margin:0 5% 0 auto;
`




const Header = () => {
  const logoUrl="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
  return (
    <div>
      <HeaderStyle>
        <Toolbar style={{minHeight:'55'}}>
          <Component>
            <img
              src={logoUrl}
              alt="Logo" style={{ width: "100px"}}
            />
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons/>
          </CustomButtonWrapper>
        </Toolbar>
      </HeaderStyle>
    </div>
  );
};

export default Header;
