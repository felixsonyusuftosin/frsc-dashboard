import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MapObjectService} from './map-object.service';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { BodyComponent } from './body/body.component';
import { WidgetComponent } from './widget/widget.component';
import { OperationComponent } from './operation/operation.component';
import { PopoverModule } from 'ng2-pop-over-iefix';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    LeftbarComponent,
    BodyComponent,
    WidgetComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule
      ],
  providers: [MapObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
