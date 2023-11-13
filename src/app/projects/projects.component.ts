import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projectList: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllProjects();
  }
  getAllProjects() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects')
      .subscribe((res: any) => {
        console.log(res);
        this.projectList = res.data;
      });
  }
}
