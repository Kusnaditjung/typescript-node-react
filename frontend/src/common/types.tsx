export interface Token{
    name: string;
    token: string;
}

export interface User{
    name: string;
    password: string;
}


export interface Book{
    title: string;
    author: string;
    year: number;
}



export interface AppState{
    token? : Token        
}