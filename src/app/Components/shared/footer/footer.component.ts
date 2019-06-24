import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="container-fluid bg-4 text-center">
      <app-nav>
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Back to top<span class="sr-only">(current)</span></a
          >
        </li>
      </app-nav>
      <p>Copyright &copy; 2019</p>
    </footer>
  `,
  styles: [
    `
      .bg-4 {
        background-color: #2f2f2f; /* Black Gray */
        color: #fff;
      }
      .container-fluid {
        padding-top: 70px;
        padding-bottom: 70px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
