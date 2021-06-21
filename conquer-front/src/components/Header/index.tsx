import retangulo from '../../assets/logo.svg'
import { Container} from './styles'

export function Header() {
  return (
    <Container>
      <img src={retangulo} alt="parcele pag" />
        <h1>CONQUER</h1>
    </Container>
    
  )
}