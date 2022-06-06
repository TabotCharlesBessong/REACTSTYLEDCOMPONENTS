import React from 'react'
// import {styled}
import styled from 'styled-components'

const App = () => {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  const Wrapper = styled.section`
  padding: 2em 4rem;
  background: papayawhip;
`;

// you can pass props to chnage the styling of the component according to the props passed to it 

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  // In the example below , you inhrerite the styling of another components and just overrite  some properties

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

  const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;



  return (
    <Wrapper>
    <Title>
      Hello World!
    </Title>
    <Button as="a" href="#" >Normal </Button>
    <Button primary>Primary</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>

    <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
  </Wrapper>
  )
}

export default App