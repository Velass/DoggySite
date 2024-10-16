import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../../service/dog-api.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  imgDog: string = ''

  constructor(private dogService: DogApiService,) { }

  ngOnInit(){
    this.RandomImage()
  }
  /* Utilisation de l'api dogApi pour avoir une image aléatoire de chien */
  RandomImage(){
    this.dogService.getRandomDog().subscribe(res =>
      this.imgDog = res.message
    )
  }

}