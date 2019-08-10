import { Component, OnInit } from '@angular/core';
import { QueueServiceService } from '../queue-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Queue } from '../models/Queue';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.css']
})
export class QueueListComponent implements OnInit {
  public queues;
  queueModel= new Queue();
  errorMsg: boolean;
  constructor(private queueService: QueueServiceService,private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.queueService.getQueueList().subscribe(data =>{
      this.queues = data;
    });
  }

  onSubmit(){
    //alert(this.queueModel.queuename);
    if(this.queueModel.queueName == undefined){
      alert("Please enter queue name");
      this.errorMsg = true;
    } else{
      this.queueModel.queueName = this.queueModel.queueName;
      this.queueService.createNewQueue(this.queueModel).subscribe(data => {
        alert(data);
        this.queues = data;
        //this.router.navigate(['/stock-list']);  
        //this.successMsg = data;
      }, error => console.error()
      );;
    }
  }
  getMessageByQueue(queue){
    alert(queue.queueId);
    this.queueService.changeQueueId(queue.queueId);
    //this._service.getEmployeeDetails(employee.id);
    //this.employee.next(this.router.navigate(['/getEmployeeDetails', employee.id]));
    return this.router.navigate(['/view-message', queue.id]);
  }
}
