import gitlogo from '../assets/github.webp'
import { Container } from './styles';

function App() {
  return (
    <Container className="App">
      <img src = {gitlogo} width={72} height={72} alt="github logo" />
    </Container>
  );
}

export default App;
