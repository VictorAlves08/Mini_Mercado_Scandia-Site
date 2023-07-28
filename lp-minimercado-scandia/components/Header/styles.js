"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 12em;
  background: rgb(9, 9, 64);

  padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;

  color: #fff;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .icons-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .icon{
        &:hover{
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
