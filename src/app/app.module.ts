import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloHeroes } from './Heroes/Heroe.module';
/**Tarea de Crear el modulo de contador e importalo */
import { ModuloContador } from './Contador/Contador.module';
import { ModuloLol } from './lol/lol.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule,ModuloLol, ModuloHeroes, ModuloContador ],
})
export class AppModule {}
