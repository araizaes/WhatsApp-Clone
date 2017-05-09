import { Component } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Chat, MessageType } from '../../../../imports/models';
import template from './chats.html';
 
@Component({
  template
})
export class ChatsPage {
  chats: Observable<Chat[]>;
 
  constructor() {
    this.chats = this.findChats();
  }
 
  private findChats(): Observable<Chat[]> {
    return Observable.of([
      {
        _id: '0',
...some lines skipped...
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          content: 'You on your way?',
          createdAt: Moment().subtract(1, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
...some lines skipped...
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          createdAt: Moment().subtract(2, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
...some lines skipped...
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          createdAt: Moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
...some lines skipped...
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          content: 'Look at my mukluks!',
          createdAt: Moment().subtract(4, 'days').toDate(),
          type: MessageType.TEXT
        }
      },
      {
...some lines skipped...
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          content: 'This is wicked good ice cream.',
          createdAt: Moment().subtract(2, 'weeks').toDate(),
          type: MessageType.TEXT
        }
      }
    ]);