import styled from "styled-components";

export const SelectWrapper = styled.div`
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px 16px;
    color: rgba(251, 251, 251, 0.7);
  }

  .MuiOutlinedInput-root {
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #fff;
    min-width: 289px;

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    .MuiSvgIcon-root {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
