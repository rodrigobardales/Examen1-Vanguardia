import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumenComponent } from './components/home-page/resumen/resumen.component';
import { CuentasComponent } from './components/home-page/cuentas/cuentas.component';
import { TransaccionesComponent } from './components/home-page/transacciones/transacciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumenComponent,
    CuentasComponent,
    TransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
