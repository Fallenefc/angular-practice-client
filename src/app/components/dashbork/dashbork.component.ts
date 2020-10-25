import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GetborksService } from 'src/app/services/getborks.service';

@Component({
  selector: 'app-dashbork',
  templateUrl: './dashbork.component.html',
  styleUrls: ['./dashbork.component.css']
})
export class DashborkComponent implements OnInit {

  constructor(private apiClientService: GetborksService, ) { }

  dogs: any = [];

  value: string;

  formName: string;
  formImage: string;
  formAge: number;
  formDesc: string;

  updateFormName: string;
  updateToFormName: string;

  deleteFormName: string;

  ngOnInit(): void {
    this.getDog();
  }

  getDog() {
    this.apiClientService.getDoggos().subscribe(bork => this.dogs = bork);
    console.log(this.dogs)
  }

  addDog() {
    console.log('WOOF')
    console.log(this.formName)
    this.apiClientService.postDoggos({
      "name": this.formName,
      "image": this.formImage,
      "age": this.formAge,
      "description": this.formDesc
    }).subscribe(dog => console.log(dog));
  }

  updateDog() {
    this.apiClientService.updateDoggo({
      "name": this.updateFormName,
      "updatedName": this.updateToFormName
    }).subscribe(dog => console.log(dog));
  }

  removeDog() {
    this.apiClientService.removeDoggo({
      "name": this.deleteFormName,
    }).subscribe(dog => console.log(dog));
  }
}
