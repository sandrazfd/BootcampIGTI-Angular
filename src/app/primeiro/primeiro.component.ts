import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  valor: number = 0;

  increment() {
    this.valor++;
  }

  ngOnInit(): void {
  }

}
