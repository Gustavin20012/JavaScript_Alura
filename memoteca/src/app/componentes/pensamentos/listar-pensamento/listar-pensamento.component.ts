import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },

    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },

    {
      conteudo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, esse quam consequuntur voluptates minima debitis maxime, accusantium ad necessitatibus a est id, quaerat provident cum facilis. Ratione eius voluptatum cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates, ducimus, nulla quisquam ab quas veniam consequatur vel deserunt, quasi rem odio iste dolores dolore id accusamus eius iure quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut commodi, quas accusamus dolores sint officiis et rerum voluptas, dignissimos adipisci blanditiis temporibus cupiditate provident quia cum laboriosam deleniti in corrupti.',
      autoria: '',
      modelo: 'modelo1'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
