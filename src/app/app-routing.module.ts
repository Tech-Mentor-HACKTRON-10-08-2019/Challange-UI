import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { QueueMessageComponent } from './queue-message/queue-message.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'queue-list', component: QueueListComponent},
  { path: 'view-message/:queueId', component: QueueMessageComponent}
  // { path: 'delete-list/:id', component: StockListComponent},
  // { path: 'new-stock', component: NewStockComponent},
  // { path: 'new-stock/:id', component: NewStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
