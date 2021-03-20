import React from 'react'

export default function cadastroUsuario(): React.ReactElement {
  const [usuario, setUsuario] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [senha2, setSenha2] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(usuario, email, senha, senha2)
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="w-full max-w-xs m-auto bg-gray-200 rounded p-5">
        <header className="text-3xl text-center mb-6">GRUPO 1 - 38SCJ</header>
        <form onSubmit={onSubmit}>
          <div>
            <label className="block mb-2 text-black" htmlFor="username">
              Usuário
            </label>
            <input
              className="w-full p-2 mb-6 text-black outline-none rounded focus:bg-gray-300"
              type="text"
              name="username"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-black" htmlFor="username">
              E-mail
            </label>
            <input
              className="w-full p-2 mb-6 text-black outline-none rounded focus:bg-gray-300"
              type="email"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-black" htmlFor="password">
              Senha
            </label>
            <input
              className="w-full p-2 mb-6 text-black outline-none rounded focus:bg-gray-300"
              type="password"
              name="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-black" htmlFor="password2">
              Confirmar Senha
            </label>
            <input
              className="w-full p-2 mb-6 text-black outline-none rounded focus:bg-gray-300"
              type="password"
              name="password"
              value={senha2}
              onChange={(e) => setSenha2(e.target.value)}
            />
          </div>
          <div>
            <button
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
              type="submit"
            >
              Criar Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
