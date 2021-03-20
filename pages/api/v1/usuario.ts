/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../services/mongo'
import Usuarios, { UsuariosInterface } from '../../../models/Usuarios'
import crypto from 'crypto'

dbConnect()

/*const middleware = (req) => {
  console.log(method)
}*/

const getUsuarios = async (): Promise<UsuariosInterface[]> => {
  const usersProjection = {
    __v: false,
    senha: false,
  }
  const usuarios = await Usuarios.find({}, usersProjection)
  return usuarios
}

const addUser = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const body = req.body

  if (body.usuario && body.senha && body.email) {
    const findEmail = await Usuarios.findOne({ email: body.email })
    if (findEmail) {
      return res.status(400).send({ error: true, message: 'Já existe um e-mail cadastrado' })
    } else {
      body.senha = crypto.createHash('sha256').update(body.senha).digest('base64')
      await Usuarios.create(body)
      const user = await Usuarios.findOne({ email: body.email })
      return res.status(200).send({ id: user.id })
    }
  } else {
    return res.status(400).send({ error: true, message: 'Invalid data' })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  //middleware(req)
  const { method } = req

  switch (method) {
    case 'GET':
      const resData: UsuariosInterface[] = await getUsuarios()
      res.status(200).json(resData)
      break
    case 'POST':
      await addUser(req, res)
      break
  }
}
