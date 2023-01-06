

export interface LoginResponse {
    usuario:    IUsuario
    token:      string
}

export interface IUsuario {
    role:   string
    state:  boolean
    google: boolean
    nombre: string
    correo: string
    uid:    string
    img?:   string
}