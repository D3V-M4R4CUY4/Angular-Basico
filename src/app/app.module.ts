import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloHeroes } from './Heroes/Heroe.module';
/**Tarea de Crear el modulo de contador e importalo */
import { ModuloContador } from './Contador/Contador.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModuloHeroes, ModuloContador],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
