import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'opcion-registro',
    loadChildren: () => import('./pages/opcion-registro/opcion-registro.module').then( m => m.OpcionRegistroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'boton-panico',
    loadChildren: () => import('./pages/boton-panico/boton-panico.module').then( m => m.BotonPanicoPageModule)
  },
  {
    path: 'lista-incidencias',
    loadChildren: () => import('./pages/lista-incidencias/lista-incidencias.module').then( m => m.ListaIncidenciasPageModule)
  },
  {
    path: 'catalogo-incidencias',
    loadChildren: () => import('./pages/catalogo-incidencias/catalogo-incidencias.module').then( m => m.CatalogoIncidenciasPageModule)
  },
  {
    path: 'registro-incidencia',
    loadChildren: () => import('./pages/registro-incidencia/registro-incidencia.module').then( m => m.RegistroIncidenciaPageModule)
  },
  {
    path: 'detalle-incidencia',
    loadChildren: () => import('./pages/detalle-incidencia/detalle-incidencia.module').then( m => m.DetalleIncidenciaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
