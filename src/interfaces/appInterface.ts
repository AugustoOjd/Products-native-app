
export interface LoginData {
    email: string
    password: string | number

}

export interface RegisterData {
    name: string
    email: string
    password: string | number
}

export interface LoginResponse {
    usuario:    IUsuario
    token:      string
    error?:     string
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


// Generated by https://quicktype.io

export interface Product {
    id?:       number;
    price:    string;
    name:     string;
    category: string;
    img?:     string;
    user:     User;
}

export interface User {
    id:       string;
    name:     string;
    email:    string;
    password: number | string;
    role:     string;
    state:    boolean;
    token:    string;
}
