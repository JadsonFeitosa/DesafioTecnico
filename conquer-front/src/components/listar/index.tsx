import iconDetalhes from '../../assets/butdetalhes.svg'
import iconEdit from '../../assets/butedit.svg'
import iconDel from '../../assets/butdel.svg'
import iconFilter from '../../assets/iconfilter.svg'
import butpes from '../../assets/butpes.svg'
import { Container, Content } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'

export interface opcao{
  id: number,
  text: string,
}

export function Listar() {

  const dados = [{picture:"https://http2.mlstatic.com/D_NQ_NP_614041-MLB27185740295_042018-O.jpg", id:"1",name:"Maria", date:"12/12/2020", cell:'898998' },
  {picture:"https://http2.mlstatic.com/D_NQ_NP_614041-MLB27185740295_042018-O.jpg", id:"1",name:"Maria", date:"12/12/2020", cell:'898998' },
  {picture:"https://http2.mlstatic.com/D_NQ_NP_614041-MLB27185740295_042018-O.jpg", id:"1",name:"Maria", date:"12/12/2020", cell:'898998' }];
 
  const [data, setData] = useState();

    useEffect(() =>{
      api.get('/user')
        .then(response => {setData(response.data)})
    }, []);

  // const Row = ({record}) => {
  //   const keys = Object.keys(record)
  //   return(
  //     <tr key={record.id}>
  //       {
  //         keys.map(key=><td key={key}>{record[key]}</td>)
  //       }
  //        <td>
  //           <button><img src={iconDetalhes} alt="" /></button>
  //           <button><img src={iconEdit} alt="" /></button>
  //           <button><img src={iconDel} alt="" /></button>
  //         </td>
  //       </tr>
  //   )
  // }

  return (<Container>
    <h1>Lista de usuários</h1>
    <hr />

    <Content>
      <input type="text" />
      <button className="ButtonPes"><img  src={butpes} alt="imge.png" /></button>
      <button className="ButtonFilter">Filter   <img src={iconFilter} alt="imge.png" /></button>
    </Content>

    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Id</th>
          <th>Usuario</th>
          <th>E-mail</th>
          <th>Data de Aniversario</th>
          <th>Telefone</th>
          <th title="Ações">Ações</th>
        </tr>
      </thead>

      <tbody>
        {dados.map(record=> {
         const keys = Object.keys(record)
         return(
          <tr key={record.id}>
            {
              keys.map(key=> <td key={key}> {record.name} </td>)
            }
             <td>
                <button><img src={iconDetalhes} alt="" /></button>
                <button><img src={iconEdit} alt="" /></button>
                <button><img src={iconDel} alt="" /></button>
              </td>
            </tr>
        )
        })}
      </tbody>
      
    </table>
  </Container>
  );
}