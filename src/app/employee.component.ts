
import { Component,OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
    selector: 'employee',
    templateUrl: './employee.html'
})
export class EmployeeComponent implements OnInit {
    qualifications :string [];
    experiences :string [];
    coding_languages:string [];
    code_language=[];
    box_check ( lang: string)
    {
      for(var i=0;i<5;i++)
      {
        var flag=0;
        if (this.code_language[i] == lang)
        {
          flag=1;
          break;
        }
      }
        if(flag==1)
        {
          this.code_language.splice(i,1);
        }
        else{
          this.code_language.push(lang);
        }
     
    }
   


ngOnInit()
{
    this.qualifications =['B.tech','M.tech','B.pharma','Bca'];
    this.experiences =['Fresher','Teamleader','Management','HR'];
    this.coding_languages=['C/C++','Java','C#','PHP','python'];
}

 model = new Employee('','','','','','','','','','', this.code_language );

OnSubmit(model:string)
{
    console.log(model);
}
}