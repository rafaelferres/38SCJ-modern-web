import mongoose, { Schema, model, Document } from 'mongoose'

export interface UsuariosInterface extends Document {
  usuario: string
  email: string
  senha: string
}

const UsuariosSchema = new Schema({
  usuario: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  senha: {
    type: String,
    required: true,
  },
})

export default mongoose.models.usuarios || model<UsuariosInterface>('usuarios', UsuariosSchema)
