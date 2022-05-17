import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PrimaryCardComponent } from './componentes/primary-card/primary-card.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RedesComponent } from './componentes/header/redes/redes.component';
import { LogosAPComponent } from './componentes/header/logos-ap/logos-ap.component';
import { LoginComponent } from './componentes/header/login/login.component';
import { NavRightComponent } from './componentes/header/nav-right/nav-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimaryCardComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    RedesComponent,
    LogosAPComponent,
    LoginComponent,
    NavRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
