import { Message } from './Message';

export class Queue{
    messages: Message[];  
    queueID: number;
    queueName: String;
    maxSize: number;
    
}