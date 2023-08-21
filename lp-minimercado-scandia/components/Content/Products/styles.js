"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 8px;

  h1 {
    text-align: center;
    font-size: 1.1em;
  }

  section{
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    overflow-x: scroll;
    overflow-y: hidden;

    gap: 6px;
}
`;