import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Competiciones } from '../../components/competiciones/competiciones';
import { Noticias } from '../../components/noticias/noticias';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, Noticias, Competiciones],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
