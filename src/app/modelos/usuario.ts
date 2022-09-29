import {Rol} from "./rol";

export class Usuario {
  // @ts-ignore
  idUsuario: number;
  nombreUsuario: string ="";
  clave: string ="";
  correo: string="";
  // @ts-ignore
  rol: Rol;
  token: string="";
}
