import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private dialog: MatDialog) {}

  nome: string = ''
  sobrenome: string = ''
  username: string = ''
  cpf: string = ''
  tel: string = ''
  end: string = ''
  complemento: string = ''
  senha: string = ''
  confirmarsenha: string = ''



  submit() {
    console.log(`O nome é: ${this.nome}`)
    console.log(`O sobrenome é: ${this.sobrenome}`)
    console.log(`O username é: ${this.username}`)
    console.log(`O cpf é: ${this.cpf}`)
    console.log(`O telefone é: ${this.tel}`)
    console.log(`O endereço é: ${this.end}`)
    console.log(`O complemento é: ${this.complemento}`)
    console.log(`A senha é: ${this.senha}`)

    let ref = this.dialog.open(DialogComponent)
    
    ref.componentInstance.dNome = this.nome
    ref.componentInstance.dSobrenome = this.sobrenome
    ref.componentInstance.dUsername = this.username
    ref.componentInstance.dCpf = this.cpf
    ref.componentInstance.dTel = this.tel
    ref.componentInstance.dEnd = this.end

  }

  validarSenha(v1: any, v2: any): boolean {

    return !(v1 === v2)

  }
  

}

