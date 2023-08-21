"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  padding: 2px;

  h1 {
    text-align: center;
    font-size: 1.1em;
  }

  section {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    gap: 8px;
  }
`;
