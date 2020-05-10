import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dj-magic-string',
  template: `
    <div #content>
      <ng-content></ng-content>
</div>
  `,
  styles: []
})
export class MagicStringComponent implements OnInit {

  @ViewChild('content') content : ElementRef;

  constructor() { }

  ngOnInit() {
     console.log('this.content.nativeElement', this.content.nativeElement)
  }

}
