import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin: 5rem;

  h1{
    color: var(--text-body-table);
    font-weight: 600;
  }
  hr{
    margin-bottom: 3rem;
  }
  

  table {
    margin-top: 2rem;
    width:100%;
    border-spacing: 0 0.5rem;

    th {
      
      color: var(--text-body-table);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      /* background: #E4E4E4; */
      /* border-top-left-radius: 1rem ; */
    }
    td {
      padding: 1rem 2rem;
      border:0;
      background: #FFF;
      color: var(--text-body-table);
      border-radius: 0.1rem;
      &:first-child{
        color: #000
      }

      button {
        text-align: unset;
        margin-left: 0.1rem;
        background: #fff;
        border: 0;
        align-items: center;

        &:hover {
            filter: opacity(0.5)
        }

        img{
          max-width: 45%
        }
      }


    }
  }


`;

export const Content = styled.div`
 font-weight: 400;
 width:100%;
 
 button {
   
  margin-left: 1rem;
  max-height: 3rem;
  padding: 0.7rem 2rem;
  border-radius: 0.25rem;
  background: var(--green);
  color: #FFFFFF;
  font-size: 1rem;

  img {
    max-width: 25%;
  }
 }

 input {
  width:60%;
  margin-left: 1rem;
  padding: 0.7rem 2rem;
  border-radius: 0.25rem;
  border: 0;
 }

 .imgPes{
  width: 1rem;
 }

 .ButtonFilter{
  /* background: var(--blue); */
  align-items: flex-end;
 }

 .ButtonPes{
  width: 1rem; 
  background: var(--blue);
  margin-left: -4rem;
  border-radius: 0.25rem;
  padding: 0.7rem 2rem;
  border: 0;
  &:hover {
            filter: contrast(0.5)
        }

 }
 

 

 /* padding: 1rem 2rem; */


`;