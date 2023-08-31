"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15rem;

  background: rgb(9, 9, 64);
  padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 50%;
  height: 100%;

  color: #fff;
  font-weight: bold;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .icons-container {
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 12px;

    .icon {
      &:hover {
        color: #4183c4;
      }
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 0.5em;
  }
`;
