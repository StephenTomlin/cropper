import { Component, OnInit } from '@angular/core';
import { buttonSize } from '../prefabs/button/button.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public large = buttonSize.large;
  public small = buttonSize.small;
  public block = buttonSize.block;
  
  constructor() { }

  ngOnInit(): void {
  }

}
