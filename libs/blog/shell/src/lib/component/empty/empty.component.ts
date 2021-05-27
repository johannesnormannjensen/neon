import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neon-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  title = 'yoyoyo';
  color = 'somecolor';

  constructor() { }

  ngOnInit(): void {
  }

}
