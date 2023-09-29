import { Component, Input } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import { Supermercado } from 'src/app/dominio/supermercado'

@Component({
  selector: 'app-cardSobres',
  templateUrl: './cardSobres.component.html',
  styleUrls: ['./cardSobres.component.css']
})
export class CardSobresComponent {

  constructor(private router: Router, private route :ActivatedRoute) {}
  
  @Input() cardSobres!: Supermercado

}
