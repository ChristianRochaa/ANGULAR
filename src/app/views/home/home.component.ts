import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo!: string;
  public texto!: string;
  classtodiv={};

  constructor() {
  this.classtodiv = {
    'text-sucess': true
  };
}

  ngOnInit(): void {
    this.titulo!='lorem ipsum teste de titulo';
    this.texto!='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vel sapiente ipsum distinctio voluptate. Impedit, laborum obcaecati quis repudiandae perspiciatis repellat porro similique nesciunt debitis vero provident sit placeat. Cupiditate.';
  }

}
