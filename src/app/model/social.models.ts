export interface userI{
    _id: string;
    name: string;
    lastname: string;
    email:string;
    password:string;
    addnews: boolean;
    role: string;
}

export interface userProfileI{
    _id: string;
    idUser: string;
    name: string;
    lastname: string;
    imagen: string;
    email: string;
    description: string;
    enlaceGit: string;
    enlaceLinkedin: string;
}

export interface projectsI{
    _id:string,
    idUserProf: string,
    name: string;
    imagen: string;
    html:string;
    css:string;
    react:string;
    angular:string;
    php:string;
    jscript:string;
    python:string;
    java:string;
    otros:string;
    otherText:string;
    description: string;
    enlaceGit: string;
    enlaceProyecto:string;
}

export interface mensajesI{
    _id:string,
    email:string,
    title: string,
    textomsj: string
}

export interface respuestasI{
    _id:string,
    idMsj:string,
    title: string,
    textomsj: string
}
