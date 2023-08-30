"use client";

import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 25rem;
  padding: 8px;

  background: rgb(9, 9, 64);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 1.1em;
  }

  text {
    color: #fff;
    font-size: 0.85rem;

    text-align: center;

    a {
      color: #fff;
    }
  }
`;
