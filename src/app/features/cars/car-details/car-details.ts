import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  pricePerDay: number;
  fuelType: string;
  transmission: string;
  seats: number;
  rating: number;
  imageUrl: string;
}

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.html',
  styleUrl: './car-details.scss',
})
export class CarDetails {

  

  constructor(private readonly route: ActivatedRoute) {}

   protected   car = {
    name: 'Maruti Swift',
    brand: 'Maruti Suzuki',
    type: 'Hatchback',
    pricePerDay: 1500,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    rating: 4.3,
    images: [
      'images/swift.jpg',
      'images/altroz.jpg',
      'images/baleno.jpg'
    ],
    description:
      'Maruti Swift is a stylish, reliable, and fuel-efficient hatchback perfect for city drives and short trips.',
    specs: {
      mileage: '22 km/l',
      engine: '1197 cc',
      power: '89 bhp',
      bootSpace: '268 L',
      ac: 'Yes',
      airbags: 'Dual Front'
    },
    features: [
      'Touchscreen Infotainment',
      'Bluetooth & USB',
      'ABS with EBD',
      'Rear Parking Sensors',
      'Power Steering',
      'Keyless Entry'
    ]
  };

  selectedImage!: string;

  ngOnInit(): void {
    this.selectedImage = this.car.images[0];
  }

  onThumbnailClick(image: string): void {
    this.selectedImage = image;
    console.log(this.selectedImage)
  }


}
