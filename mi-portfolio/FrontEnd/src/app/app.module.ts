import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';

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
import { BannerComponent } from './componentes/primary-card/banner/banner.component';
import { PriCardFootComponent } from './componentes/primary-card/pri-card-foot/pri-card-foot.component';
import { PriCardLeftComponent } from './componentes/primary-card/pri-card-foot/pri-card-left/pri-card-left.component';
import { PriCardRightComponent } from './componentes/primary-card/pri-card-foot/pri-card-right/pri-card-right.component';
import { ProfileComponent } from './componentes/primary-card/pri-card-foot/pri-card-left/profile/profile.component';
import { AddSectionsComponent } from './componentes/primary-card/pri-card-foot/pri-card-left/add-sections/add-sections.component';
import { HttpClientModule } from '@angular/common/http';


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
    NavRightComponent,
    BannerComponent,
    PriCardFootComponent,
    PriCardLeftComponent,
    PriCardRightComponent,
    ProfileComponent,
    AddSectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
