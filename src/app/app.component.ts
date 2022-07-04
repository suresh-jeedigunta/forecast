import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForcastService } from './forcast.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carousel-ex';
  userForm: FormGroup;
  city : string = "";
  constructor(private router: Router, private forcastService: ForcastService, private fb: FormBuilder,
    private cdr: ChangeDetectorRef){ }

  latLngValues: any = [];
  location: any;

  weatherReport : any;
  ngOnInit(){
  }

  ngAfterContentChecked() {
		this.cdr.detectChanges();
	}

  myDate = new Date();
  
  getWeatherForcast(){
    let apiKey = '1635890035cbba097fd5c26c8ea672a1';
    let lat = this.latLngValues[1];
    let lng = this.latLngValues[0];
    this.forcastService.getWeather(lat, lng, apiKey).subscribe(result =>{
      console.log("Weather: ", result)
      this.weatherReport = result.list;
      this.cdr.detectChanges();
    })
  }

  onRegionEnter() {
    this.latLngValues = []
  }
  handleAddressChange(address) {
    this.latLngValues = [address['geometry']['location'].lng(), address['geometry']['location'].lat()]
  }

}