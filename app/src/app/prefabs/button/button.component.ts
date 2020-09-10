import { Component, OnInit, Input } from '@angular/core';
import { buttonSize } from './button.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  public primary: boolean = true;

  @Input()
  public size: string;

  public large = buttonSize.large;
  public small = buttonSize.small;
  public block = buttonSize.block;

  constructor() { }

  ngOnInit(): void {
  }

}
