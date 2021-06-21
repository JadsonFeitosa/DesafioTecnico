import styled from "styled-components";


export const Container = styled.form`

  margin: 15rem;
  width: 40%;
  background: #ffff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  justify-content: space-between;

  input{
  
    border-radius: 0.25rem;
    width: 100%;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    background: var(--bar);
    color:#ffff
  }
  button{
    display: flex;
    text-align: center;
    margin-left:25%;
    width: 50%;
    padding: 1rem 2rem;
    padding-left: 5rem;
    background: #F6EE00;
    font-weight: 600;
    font-size: 1rem;
    border: 0;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  img{
    margin-left:11%;
  }

.buttonRegister{
  background: #ffff;
  width: 25%;
  margin-left:37%;
  padding-left: 1.2rem;
}
`;



export const Content = styled.div`
  display: flex;
  align-items: center;

`;