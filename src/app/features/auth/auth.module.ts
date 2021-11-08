import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth.service';
//import { HttpClientModule } from '@angular/common/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers :[AuthService]
})
export class AuthModule { }
