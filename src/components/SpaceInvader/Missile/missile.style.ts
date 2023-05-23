import styled from "styled-components";

export const StyledMissile = styled.image<{isShooting : boolean}>`
  position: "absolute";
  display: ${props => (props.isShooting ? "flex" : "none")};
`;
