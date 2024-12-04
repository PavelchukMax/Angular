import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
  
})
export class FirstComponent {
  paintings = [
    {
      title: 'Starry Night',
      artist: 'Vincent van Gogh',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/970px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      description: 'Одна з найвідоміших робіт Ван Гога, створена в 1889 році.'
    },
    {
      title: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      description: 'Мона Ліза - одна з найвідоміших картин у світі, створена в 1503-1506 роках.'
    }];
    
  selectedPainting: any = null;

  selectPainting(painting: any) {
    this.selectedPainting = painting;
  }
    closeModal() {
      this.selectedPainting = null;
    }
}
