
export interface LoginData {
    email: string
    password: string | number
}

export interface LoginResponse {
    usuario:    IUsuario
    token:      string
}

export interface IUsuario {
    id: string,
    role:   string
    state:  boolean
    google?: boolean
    name: string
    email: string
    uid?:    string
    img?:   string
}