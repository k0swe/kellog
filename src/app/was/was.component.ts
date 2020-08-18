import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kel-was',
  templateUrl: './was.component.html',
  styleUrls: ['./was.component.scss']
})
export class WasComponent implements OnInit {
  mode = 'mixed';
  band = 'mixed';
  zoom = 3;
  center: google.maps.LatLngLiteral = {lat: 40, lng: -105};
  options: google.maps.MapOptions = {
    minZoom: 2,
    maxZoom: 7,
    streetViewControl: false,
  };

  states = [
    {name: 'Alabama', abbrev: 'AL', lat: 32.601, lon: -86.6807},
    {name: 'Alaska', abbrev: 'AK', lat: 61.3025, lon: -152.775},
    {name: 'Arizona', abbrev: 'AZ', lat: 34.1682, lon: -111.9309},
    {name: 'Arkansas', abbrev: 'AR', lat: 34.7519, lon: -92.1314},
    {name: 'California', abbrev: 'CA', lat: 36.2719, lon: -120.2704},
    {name: 'Colorado', abbrev: 'CO', lat: 38.9979, lon: -105.5506},
    {name: 'Connecticut', abbrev: 'CT', lat: 41.5188, lon: -72.7575},
    {name: 'Delaware', abbrev: 'DE', lat: 39.1453, lon: -75.4189},
    {name: 'Florida', abbrev: 'FL', lat: 27.9757, lon: -81.833},
    {name: 'Georgia', abbrev: 'GA', lat: 32.6781, lon: -83.223},
    {name: 'Hawaii', abbrev: 'HI', lat: 20.46, lon: -157.505},
    {name: 'Idaho', abbrev: 'ID', lat: 44.4946, lon: -114.1424},
    {name: 'Illinois', abbrev: 'IL', lat: 39.7393, lon: -89.5041},
    {name: 'Indiana', abbrev: 'IN', lat: 39.7662, lon: -86.4413},
    {name: 'Iowa', abbrev: 'IA', lat: 41.9383, lon: -93.3898},
    {name: 'Kansas', abbrev: 'KS', lat: 38.4988, lon: -98.3201},
    {name: 'Kentucky', abbrev: 'KY', lat: 37.8223, lon: -84.7682},
    {name: 'Louisiana', abbrev: 'LA', lat: 30.9734, lon: -92.4299},
    {name: 'Maine', abbrev: 'ME', lat: 45.2185, lon: -69.0149},
    {name: 'Maryland', abbrev: 'MD', lat: 39.3064, lon: -77.2684},
    {name: 'Massachusetts', abbrev: 'MA', lat: 42.3629, lon: -71.7181},
    {name: 'Michigan', abbrev: 'MI', lat: 44.9436, lon: -85.4158},
    {name: 'Minnesota', abbrev: 'MN', lat: 46.4419, lon: -93.3655},
    {name: 'Mississippi', abbrev: 'MS', lat: 32.5851, lon: -89.8772},
    {name: 'Missouri', abbrev: 'MO', lat: 38.3047, lon: -92.4371},
    {name: 'Montana', abbrev: 'MT', lat: 46.6798, lon: -110.0448},
    {name: 'Nebraska', abbrev: 'NE', lat: 41.5008, lon: -99.6809},
    {name: 'Nevada', abbrev: 'NV', lat: 38.502, lon: -117.0231},
    {name: 'New Hampshire', abbrev: 'NH', lat: 44.0012, lon: -71.5799},
    {name: 'New Jersey', abbrev: 'NJ', lat: 40.143, lon: -74.2311},
    {name: 'New Mexico', abbrev: 'NM', lat: 34.1662, lon: -106.0261},
    {name: 'New York', abbrev: 'NY', lat: 42.7056, lon: -74.9797},
    {name: 'North Carolina', abbrev: 'NC', lat: 35.2146, lon: -79.8913},
    {name: 'North Dakota', abbrev: 'ND', lat: 47.4679, lon: -100.3023},
    {name: 'Ohio', abbrev: 'OH', lat: 40.1904, lon: -82.6693},
    {name: 'Oklahoma', abbrev: 'OK', lat: 35.3098, lon: -97.7166},
    {name: 'Oregon', abbrev: 'OR', lat: 44.1419, lon: -120.5381},
    {name: 'Pennsylvania', abbrev: 'PA', lat: 40.9946, lon: -77.6047},
    {name: 'Rhode Island', abbrev: 'RI', lat: 41.5827, lon: -71.5065},
    {name: 'South Carolina', abbrev: 'SC', lat: 33.6251, lon: -80.947},
    {name: 'South Dakota', abbrev: 'SD', lat: 44.2127, lon: -100.2472},
    {name: 'Tennessee', abbrev: 'TN', lat: 35.8305, lon: -85.9786},
    {name: 'Texas', abbrev: 'TX', lat: 31.1693, lon: -100.0768},
    {name: 'Utah', abbrev: 'UT', lat: 39.4998, lon: -111.547},
    {name: 'Vermont', abbrev: 'VT', lat: 43.8718, lon: -72.8478},
    {name: 'Virginia', abbrev: 'VA', lat: 37.5034, lon: -78.4588},
    {name: 'Washington', abbrev: 'WA', lat: 47.4233, lon: -120.3252},
    {name: 'West Virginia', abbrev: 'WV', lat: 38.9202, lon: -80.1817},
    {name: 'Wisconsin', abbrev: 'WI', lat: 44.7863, lon: -89.8267},
    {name: 'Wyoming', abbrev: 'WY', lat: 43.0003, lon: -107.5546},
  ];
  markers = [];

  constructor() {
  }

  ngOnInit(): void {
    this.states.forEach(state => {
      this.markers.push({
        position: {
          lat: state.lat,
          lng: state.lon,
        },
        label: {
          text: state.abbrev,
        },
        title: state.name,
      });
    });
  }
}