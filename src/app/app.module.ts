import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { InterviewSchedulerComponent } from './interview-scheduler/interview-scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewSchedulerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
