import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NameComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [NameComponent, ListDBZComponent, AddCharacterComponent],
  imports: [CommonModule, FormsModule

  ],
  exports: [NameComponent]
})
export class DbzModule { }
