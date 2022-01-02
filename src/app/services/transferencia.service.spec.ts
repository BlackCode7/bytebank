import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransferenciaService } from './transferencia.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('TransferenciaService', () => { // O 'f' no inicio avisa ao jasmine que so vou rodar este teste
  let service: TransferenciaService; // Declara o serviço
  let http: HttpClient;

  const url = 'http://localhost:3000/tbByteBank' 

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [
      HttpClientTestingModule
    ]
    }); // Aqui configura um modulo de teste
    service = TestBed.inject(TransferenciaService); // Aqui ele faz o injeção do teste
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => { // Teste Padrão criado pelo angular CLI
    expect(service).toBeTruthy();
  });
   
  it('Método todas deve fazer um get', async () => { // Escrevendo teste do método todas() // Colocando um espião    
    const spy = spyOn(http, 'get').and.callThrough(); //Chamamos este método .and.callThrough() para evitar travamentos no teste
    service.todas(); //Chamo o metodo do service aqui todas()
    expect(spy).toHaveBeenCalledWith(url); //Aqui eu espero a chamada do spy
  })
});

// OBS >>> Para rodar um teste com jasmine devemos usar o >>> npm test