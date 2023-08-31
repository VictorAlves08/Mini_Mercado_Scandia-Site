"use client";

import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  padding: 8px;

  h1 {
    text-align: center;
    white-space: nowrap;

    overflow: hidden;
    border-right: 1px solid #000;
    animation: ${typingAnimation} 4s steps(37, end);

    font-size: 1.1em;
  }

  p {
    text-align: center;
  }
`;
