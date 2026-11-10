import { Routes } from '@angular/router';
import { Arbitros } from './pages/arbitros/arbitros';
import { Clasificaciones } from './pages/clasificaciones/clasificaciones';
import { Contacto } from './pages/contacto/contacto';
import { Equipos } from './pages/equipos/equipos';
import { Inicio } from './pages/inicio/inicio';
import { Jugadores } from './pages/jugadores/jugadores';
import { Resultados } from './pages/resultados/resultados';

const sufijo = ' | Liga Deportiva del Instituto';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Inicio' + sufijo },
  { path: 'equipos', component: Equipos, title: 'Equipos' + sufijo },
  { path: 'resultados', component: Resultados, title: 'Resultados' + sufijo },
  { path: 'clasificaciones', component: Clasificaciones, title: 'Clasificaciones' + sufijo },
  { path: 'jugadores', component: Jugadores, title: 'Jugadores' + sufijo },
  { path: 'arbitros', component: Arbitros, title: 'Árbitros' + sufijo },
  { path: 'contacto', component: Contacto, title: 'Contacto' + sufijo },
  { path: '**', redirectTo: '' },
];
