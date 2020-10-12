import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { outfits } from '../outfits';

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.component.html',
  styleUrls: ['./outfit.component.css']
})
export class OutfitComponent implements OnInit {
  outfit;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.outfit = outfits[+params.get('outfitId')];
    });
  }

}
