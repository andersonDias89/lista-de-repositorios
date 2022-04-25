import { Repository } from './components/Repository.';
import GlobalStyled from './style/globalStyled';
import styled from 'styled-components'

const Styled = styled.div`
width: 90%;
margin: auto;
padding: 20px;
`


function App() {
  return (
    <Styled>
      <GlobalStyled />
      <Repository />
    </Styled>   
  );
}

export default App;
