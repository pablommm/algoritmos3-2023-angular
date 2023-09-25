import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  /* private figuritas: any[] = [];
  figuritas$ = new BehaviorSubject<any[]>(this.figuritas); */

  constructor(private http: HttpClient) {
  }

  loadFiguritas() {
    return this.http.get<any[]>('../../assets/listaFiguritas.json')/* .subscribe((figuritasJSON: any) => {
      if (Array.isArray(figuritasJSON.figuritas)) {
        this.figuritas = figuritasJSON.figuritas.map((figurita: any) => {
          let valoracionBase = 100;
          if (figurita.estaOnFire) {
            valoracionBase *= 1.2;
          }
          if (figurita.esPar) {
            valoracionBase *= 1.1;
          }
          if (figurita['Nivel de Impresión'] === "medio" || figurita['Nivel de Impresión'] === "alto") {
            valoracionBase *= 0.85;
          }
          figurita.ValoracionBase = valoracionBase;
          return figurita; 
        });
  
        this.figuritas$.next(this.figuritas); 
      }
    }); */
  }
  

  /* getFiguritas(): any[] {
    return this.figuritas;
  } */
}
