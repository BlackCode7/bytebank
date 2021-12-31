import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
  })

  export class NovaTransferenciaComponent{
    @Output() aoTransferir = new EventEmitter<any>();// transferindo os dados para fora desta classe
    
    valor: number;
    destino: number;

    constructor(private service: TransferenciaService, private router: Router){}

    transferir(){
        console.log("SOLICITAR UMA NOVA TRANSFERENCIA")
        const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino } // transferindo os dados para fora desta classe
        
        this.service.adicionar(valorEmitir).subscribe( //Esse adicionar vem do service
          (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        }, 
        (error) => console.error(error));

        this.limparCampos();
    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
    }

  }