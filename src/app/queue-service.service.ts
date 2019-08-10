import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Queue } from './models/Queue';

@Injectable({
  providedIn: 'root'
})
export class QueueServiceService {
  public status;
  public queues: any;
  public base_URL="http://localhost:8080";

  private queueId = new BehaviorSubject(<Number>(1));
  queId = this.queueId.asObservable();

  constructor(private httpClient:HttpClient) { 
  }
  createNewQueue(queue: Queue){
    this.queues = this.status = this.httpClient.post(this.base_URL+"/queue",queue);
    if(this.queues != undefined){
      this.queues = this.httpClient.get(this.base_URL+"/queues");
      //this.queues = JSON.parse("../services/queuelist.json")
    } else {
      alert("Queue is not able to create due to some internal error please try again..");
    }
    return this.queues;
  }
  getQueueList(){
    this.queues = this.httpClient.get(this.base_URL+"/queues");
    return this.queues;
  }
  getMessageByQueueId(id){
    return this.httpClient.get(this.base_URL+"/queue-message-by-id/"+id);
  }
  changeQueueId(id){
    this.queueId.next(id);
  }

}
