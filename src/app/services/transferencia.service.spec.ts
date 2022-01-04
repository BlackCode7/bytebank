<<<<<<< HEAD
import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransferenciaService } from './transferencia.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from '../extrato/extrato.component';
import { NovaTransferenciaComponent } from '../nova-transferencia/nova-transferencia.component';
import { AppComponent } from '../app.component';
import { APP_BASE_HREF } from '@angular/common';
//import { of } from 'rxjs';
=======
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransferenciaService } from './transferencia.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
>>>>>>> 2b13ce235cfbf274f652e68c241616ca15112ca5

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
<<<<<<< HEAD
  }); 

});

describe('AppComponent', () => {
  const routes: Routes = [
    {path: '', redirectTo: 'extrato', pathMatch: 'full'},
    {path: 'extrato', component:ExtratoComponent},
    {path: 'nova-transferencia', component:NovaTransferenciaComponent}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExtratoComponent,
        NovaTransferenciaComponent        
      ],
      imports: [
        RouterModule.forRoot(routes),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue:'/'}
      ]
    }).compileComponents();
  }))

it(`Testando tag <a> de <header> bytebank `, async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app.title).toEqual('Nova Transferenci');
}))

it(`Testando tag <a> de <header> bytebank `, async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app.title).toEqual('ByteBank');
}))

it(`Testando se o AppComponent tem o título bytebank `, async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const app = fixture.debugElement.nativeElement;
  expect(app.querySelector('a').textContent).toContain('bytebank');
}))


})





// fdescribe('TransferenciaService', () => { // O 'f' no inicio avisa ao jasmine que so vou rodar este teste
//   let service: TransferenciaService; // Declara o serviço
//   let http: HttpClient;

//   const url = 'http://localhost:3000/tbByteBank' 

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//      imports: [
//       HttpClientTestingModule
//     ]
//     }); // Aqui configura um modulo de teste
//     service = TestBed.inject(TransferenciaService); // Aqui ele faz o injeção do teste
//     http = TestBed.inject(HttpClient);
//   });

//   it('should be created', () => { // Teste Padrão criado pelo angular CLI
//     expect(service).toBeTruthy();
//   });
// });

=======
  })
});

>>>>>>> 2b13ce235cfbf274f652e68c241616ca15112ca5
// OBS >>> Para rodar um teste com jasmine devemos usar o >>> npm test