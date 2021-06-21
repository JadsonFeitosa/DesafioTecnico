import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #000000;
  --blue: #F6EE00;
  --bar: #000000;
  --text-title: #363F5F;
  --green: #33CC95;
  --text-body-table: #969CB2;
  

}
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}
body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: 'AdventPro', Geneva, Verdana;
  font-weight: 400;
}
h1,h2,h3,h4,h5,h6 strong{
  font-weight: 600;
}

button {
  cursor: pointer;
}
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
 background: rgba(0, 0, 0,0.5);

 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;

 display: flex;
 align-items: center;
 justify-content: center;


}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: #E4E4E4;
  border-radius: 0.8rem;


}


`
