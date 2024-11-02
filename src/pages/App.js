import gitlogo from '../assets/github.webp'
import Input from '../components/Input';
import { Container } from './styles';

function App() {
  return (
    <Container className="App">
      <img src = {gitlogo} width={72} height={72} alt="github logo" />
      <Input />
    </Container>
  )
}

export default App;
