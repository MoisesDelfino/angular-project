import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent implements OnInit {

  @Input()
  dadosUsuario = {} as Usuario;

  logUsuario: any;

  constructor() { 
    this.logUsuario = {};
  }

  ngOnInit(): void {
  }
  imprimirUsuario(){
    this.logUsuario = this.dadosUsuario;
    Object.freeze(this.logUsuario);
    this.dadosUsuario = {} as Usuario;
  }


}
