import { Component, OnInit } from '@angular/core';
import { outfits } from '../outfits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  outfits = outfits;

  constructor() { }

  ngOnInit(): void {
  }

}
