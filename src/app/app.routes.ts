import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const RUTAS: Routes = [
    {path: 'fotos', component: FotosComponent},
    {path: 'carga', component: CargaComponent},
    {path: '**', component: FotosComponent}
];

export const APP_ROUTING = RouterModule.forRoot(RUTAS);