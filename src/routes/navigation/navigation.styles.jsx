import styled from 'styled-components';
import { Link } from 'react-router';

export const NavigationContainer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
