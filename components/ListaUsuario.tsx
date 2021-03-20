import React from 'react'
import { UsuariosInterface } from '../models/Usuarios'

export default function ListaUsuario(): React.ReactElement {
  const [listaUsuario, setListaUsuario] = React.useState([])

  React.useEffect(() => {
    fetch('/api/v1/usuario').then((res) => {
      res.json().then((json) => {
        setListaUsuario(json)
      })
    })
  }, [listaUsuario, setListaUsuario])

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ width: '50%' }}>Nome</th>
          <th style={{ width: '50%' }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {listaUsuario.map((usuario: UsuariosInterface, index) => (
          <tr key={index}>
            <td style={{ width: '50%' }} className="text-center">
              {usuario.usuario}
            </td>
            <td style={{ width: '50%' }} className="text-center">
              {usuario.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
