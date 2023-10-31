export type UsuarioLoginJSON = {
  user: string
  pass: string
}

export class UsuarioLogin {
  private constructor(
    public user: string = '',
    public pass: string = ''
  ) {}

  public id: number = 1

  private static instance: UsuarioLogin | null = null

  toJSON(): UsuarioLoginJSON {
    return {
      user: this.user,
      pass: this.pass
    }
  }

  public static getInstance(): UsuarioLogin {
    if (UsuarioLogin.instance === null) {
      UsuarioLogin.instance = new UsuarioLogin()
    }
    return UsuarioLogin.instance
  }
}
