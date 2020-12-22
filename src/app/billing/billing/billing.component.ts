import { Router } from '@angular/router';
import { BooksFacade } from 'src/app/store/books.fascade';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor( private fb: FormBuilder , private bookfascade: BooksFacade, private router: Router) { }
  customerFrom: FormGroup;
  validationmessages = {
    name : {
      required : 'Name is required',
      minlength : 'Name should not be less than 3 charector',
      maxlength : 'Name should not be more than 12 charector'
    },
    email : {
      required : 'email is required' ,
      email : 'Not a valid email'
    },
    mobile : {
      required : 'mobile no is required',
    },
    address : {
      required : 'address field is required'
    }
  };

  errors = {
    name : '',
    email : '',
    mobile : '',
    address : ''
  };
  ngOnInit(): void {

    this.customerFrom = this.fb.group({
      name : ['' , [ Validators.required , Validators.minLength(3) , Validators.maxLength(12)] ],
      email : ['', [Validators.email , Validators.required]],
      mobile : ['' , Validators.required],
      address : ['', Validators.required]
    });

    this.customerFrom.valueChanges.subscribe(value => {
      this.fetchError();
    });
  }

  onSubmit(): void{
    this.bookfascade.addUser({user : this.customerFrom.value});
    setTimeout(() => {
      this.router.navigate(['/collection']);
    }, 2000);
  }

 fetchError(group: FormGroup = this.customerFrom): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.errors[key] = '';
      if (abstractControl && !abstractControl.valid && abstractControl.touched || abstractControl.dirty){
        const messsages = this.validationmessages[key];
        for (const errorkey in abstractControl.errors ){
          if (errorkey){
            this.errors[key] += messsages[errorkey] + ' ';
          }
        }
      }
    });
  }

}
