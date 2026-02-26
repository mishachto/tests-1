import { Button as ButtonMUI } from "@mui/material";
import styled from "styled-components";

export const ButtonCustomStyle = styled(ButtonMUI)<{ $gradient?: string }>`
  && {
    background: ${(props) => props.$gradient || "linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%)"};
    text-transform: uppercase;
    font-weight: 600;
    line-height: 22px;
    border-radius: 12px;
    color: #ffffff;
    width: 100%;
    min-height: 56px;
    gap: 8px;
    transition: background 1s ease;
  }
`;
