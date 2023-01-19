import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;

  gap: 120px;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;

  overflow: hidden;
  font-size: 3rem;
  white-space: nowrap;

  border-right: .10em solid black;
  animation:
    typing 3s steps(40, end),
    blink-caret .75s step-end infinite;

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}
`

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  text-align: justify;
`;

export const ContainerImage = styled.div`
  height: 300px;
  background: -webkit-linear-gradient(to bottom, #ffff, #0052D4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #ffff, #0052D4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
