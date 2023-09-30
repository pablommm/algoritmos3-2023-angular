import { Component, Input } from '@angular/core'
import { Figurita } from 'src/app/dominio/figurita'
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  currentUrl!: string

  constructor(private router: Router, private route :ActivatedRoute) {}
  
  @Input() card!: Figurita

  OnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
         this.currentUrl = event.url
      }
    })
  }


  selecionarCard(){
    this.router.navigateByUrl('/DetalleFigurita') //en el futuro hay que modificarlo para que te lleve a la figurita que coresponde
 

}
ruta(){
  return this.currentUrl === '/FiguritaRepetida'
}

  


}





 





