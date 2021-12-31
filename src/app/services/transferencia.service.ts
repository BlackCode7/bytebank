import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private listaTransferencia : any[];
  private url = 'http://localhost:3000/tbByteBank'

  constructor(private httpClient : HttpClient) {
    this.listaTransferencia = [];
   }

   // ponto de conexão com a API tbByteBank >>> OK
   todas(): Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url)
   }

   get transferencias(){
     return this.listaTransferencia
   }

   adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
    //this.listaTransferencia.push(transferencia); aqui passava atravéz de lista
   }

   private hidratar(transferencia: any){
    transferencia.data = new Date();
   }
}


