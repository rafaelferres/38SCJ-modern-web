/* eslint-disable no-case-declarations */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../services/mongo'
import Usuarios, { UsuariosInterface } from '../../../models/Usuarios'

dbConnect()

/*const middleware = (req) => {
  console.log(method)
}*/

const getUsuarios = async (): Promise<UsuariosInterface[]> => {
  const usuarios = await Usuarios.find({})
  console.log(usuarios)
  return usuarios
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  //middleware(req)
  const { method } = req

  switch (method) {
    case 'GET':
      const resData: UsuariosInterface[] = await getUsuarios()
      res.status(200).json(resData)
      break
  }

  //res.status(200).json({ name: 'John Doe' })
}
