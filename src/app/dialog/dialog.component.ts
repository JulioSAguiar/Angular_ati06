import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dNome: string = ''
  dSobrenome: string = ''
  dUsername: string = ''
  dCpf: string = ''
  dTel: string = ''
  dEnd: string = ''
  
  

  constructor() { }

  ngOnInit(): void {
  }

}