import { Listar } from "./components/listar";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Login } from "./components/login";


export function App() {
  return (
    <div>
      <Header />
      <Listar />
      {/* <Login /> */}
      <GlobalStyle /> 
    </div>
  );
}

