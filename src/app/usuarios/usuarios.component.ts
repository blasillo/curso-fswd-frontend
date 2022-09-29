import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../servicios/usuarios.service";
import {Usuario} from "../modelos/usuario";

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<Usuario> = [];

  constructor(private usuarioServicio: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerTodosUsuarios();
  }

  private obtenerTodosUsuarios() {
    this.usuarioServicio.obtenerTodosUsuarios()
      .subscribe( datos =>{
        this.usuarios = datos;
    });
  }

}
