import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TypeSelectComponent } from './Components/type-select/type-select.component';
import { EnumsService } from './Services/enums.service';
import { WeaponTypeService } from './Services/weapon-type.service';

const appRoutes: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EnumsService, WeaponTypeService],
  declarations: [AppComponent, TypeSelectComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
