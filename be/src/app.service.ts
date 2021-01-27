import { Injectable } from '@nestjs/common';
import QuestionnaireModel from './types/comment.type';

@Injectable()
export class AppService {
  private results: QuestionnaireModel[] = [
    {
      name: 'Roman',
      lastName: 'Pakhomov',
      loveCat: true,
      date: '2015-01-01',
      mail: 'feedmenero@gmail.com',
      password: '1q2w3e4r',
      img: 'example',
    },{
      name: 'Anton',
      lastName: 'Loskutov',
      loveCat: true,
      date: '2015-02-02',
      mail: 'anton@gmail.com',
      password: '1q2w3e4r',
      img: 'example',
    }
  ];

  constructor() {}

  getResults(): QuestionnaireModel[] {
    return this.results;
  }

  getResult(mail: string): QuestionnaireModel {
    console.log(mail)
    return this.results.find(r => r.mail === mail);
  }

  updateResult(result: QuestionnaireModel): void {
    this.results = this.results.map(r => {
      if(r.mail !== result.mail) return r
      else return result
    })
  } 

  saveResult(result: QuestionnaireModel): void {
    this.results = [...this.results, result];
  }
}
