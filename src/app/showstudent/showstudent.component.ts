import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student';

@Component({
  selector: 'appshowstudent-',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent implements OnInit {
  studentlist:Student[]=[]
  id=0;
  constructor(private activaterouter:ActivatedRoute){

  }
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id'];
    
  }

}

