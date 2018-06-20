import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector:'[color]'
})

export class Color implements OnInit {

  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  @HostBinding('style.color') color;

  @Input('color') data;

  @HostListener('window:keydown', ['$event']) keyEvent($event:KeyboardEvent) {


   if($event.key == "ArrowRight"){
     this.color = this.data.right
   }

   if($event.key == "ArrowLeft"){
     this.color = this.data.left
   }

   if($event.key == "ArrowUp"){
     this.color = this.data.up
   }

   if($event.key == "ArrowDown"){
     this.color = this.data.down
   }
  }

  constructor(){}

  ngOnInit(){
  }


}
