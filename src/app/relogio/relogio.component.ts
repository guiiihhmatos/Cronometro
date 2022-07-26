import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent implements OnInit {

  segundos: number = 0
  minutos: number = 0
  time: number = 1000
  verificacao: boolean = false
  verificacaoIniciar: boolean = true
  milisegundos: number = 0

  intervalo: any

  constructor() { }

  ngOnInit(): void {}

  onStop(intervalo: any)
  {
    clearInterval(intervalo)
  }

  onIniciar()
  {

    this.segundos = 0
    this.time = 1000

    this.intervalo = setInterval(() => {
      this.milisegundos++

      if(this.milisegundos == 100)
      {
        this.segundos++
        this.milisegundos = 0
      }

      if(this.segundos === 60)
      {
        this.segundos = 0
        this.minutos++
      }

    }, 10)

    this.verificacao = true
    this.verificacaoIniciar = false
  }

  onZerar()
  {
    this.segundos = 0
    this.minutos = 0
    this.milisegundos = 0

    this.onStop(this.intervalo)
    this.verificacaoIniciar = true
    this.verificacao = false
  }
}
