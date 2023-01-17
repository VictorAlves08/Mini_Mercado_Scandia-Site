import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 300px;

  color: #fff;

  background: -webkit-linear-gradient(to top, #ffff, #0052D4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #ffff, #0052D4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .icons-details{
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 8%;

    margin-left: 10px;
    margin-right: 10px;
  }

  .logos-creditCards{
    width: 100%;
    max-width: 1280px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

  }
`;
