import { Container } from "./styles"
import nomelogo from '../../assets/nomelogo.svg'

export function Login(){
  return <Container >
            <img src={nomelogo} alt="" />
            <input type="text" placeholder="Usermane"/>
            <input type="password" placeholder="password"/>
            <button type="submit">Login</button>

            <button className="buttonRegister" type="submit">Register</button>
          
  </Container>
}