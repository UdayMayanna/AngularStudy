import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './comp/interpolation/interpolation.component';
import { CustomComponent } from './comp/custom/custom.component';
import { FunCallComponent } from './comp/fun-call/fun-call.component';
import { DatatypeComponent } from './comp/datatype/datatype.component';
import { CounterAppComponent } from './comp/counter-app/counter-app.component';
import { EventsComponent } from './comp/events/events.component';
import { GetSetValueComponent } from './comp/get-set-value/get-set-value.component';
import { IfElseComponent } from './comp/if-else/if-else.component';
import { ElseIfComponent } from './comp/else-if/else-if.component';
import { SwitchCompComponent } from './comp/switch-comp/switch-comp.component';
import { ForLoopComponent } from './comp/for-loop/for-loop.component';
import { SimpleSignalComponent } from './comp/simple-signal/simple-signal.component';
import { ComputedSignalComponent } from './comp/computed-signal/computed-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    CustomComponent,
    FunCallComponent,
    DatatypeComponent,
    CounterAppComponent,
    EventsComponent,
    GetSetValueComponent,
    IfElseComponent,
    ElseIfComponent,
    SwitchCompComponent,
    ForLoopComponent,
    SimpleSignalComponent,
    ComputedSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
