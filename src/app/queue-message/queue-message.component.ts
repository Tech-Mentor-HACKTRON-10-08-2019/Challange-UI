import { Component, OnInit } from '@angular/core';
import { QueueServiceService } from '../queue-service.service';

@Component({
  selector: 'app-queue-message',
  templateUrl: './queue-message.component.html',
  styleUrls: ['./queue-message.component.css']
})
export class QueueMessageComponent implements OnInit {
  private queue;
  constructor(private queueservice:QueueServiceService) { }

  ngOnInit() {
    this.queueservice.queId.subscribe(id => {
      //const id = parseInt(data);
      //alert(id);
      this.queueservice.getMessageByQueueId(id).subscribe((data: any) => {
        if (data) {
          this.queue = data;
        } else {
          console.log(`stock with id  not found, returning to list`);
          //this.redirectToStockList();
        }
      });

    });
  }

}
