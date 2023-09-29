import { Component, OnInit } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-detallesFigurita',
  templateUrl: './detallesFigurita.component.html',
  styleUrls: ['./detallesFigurita.component.css']
})
export class DetallesFiguritaComponent implements OnInit {
  
  constructor(private router: Router, private route :ActivatedRoute, private location: Location) {}

  ngOnInit() {
  }

  volver(){
    this.location.back();
  }

}