/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../services/mongo'
import Usuarios from '../../../models/Usuarios'
import crypto from 'crypto'

dbConnect()

const loginUser = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const body = req.body

  if (body.email && body.senha) {
    const senha = crypto.createHash('sha256').update(body.senha).digest('base64')
    const findUser = await Usuarios.findOne({ email: body.email, senha: senha })
    if (findUser) {
      return res.status(200).send({ id: findUser._id })
    } else {
      return res.status(404).send({ error: true, message: 'Usuário ou senha incorretos' })
    }
  } else {
    return res.status(400).send({ error: true, message: 'Invalid data' })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  //middleware(req)
  const { method } = req

  switch (method) {
    case 'POST':
      await loginUser(req, res)
      break
  }
}
