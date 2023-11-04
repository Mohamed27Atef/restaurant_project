import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Recipe } from 'src/app/interfaces/recipe';
import { ImageService } from 'src/app/services/image-service.service';
import { MenuService } from 'src/app/services/menu.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  RecipeForm: FormGroup;
  Menus: { id: number; title: string }[] = [];
  selectedMenuId!: Number;
  selectedImages: string[] = [];
  selectedImage: string = '';

  receipeObj: Recipe = {
    name: '',
    rating: 0,
    restaurantName: '',
    description: '',
    menuName: '',
    price: 0,
    category: '',
    imageUrl: '',
    images: [],
    menuId: 0,
  };
  constructor(
    private formBuilder: FormBuilder,
    private imageService: ImageService,
    private recipeService: RecipeService,
    private menuService: MenuService
  ) {
    this.RecipeForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Price: [null, [Validators.required, Validators.min(1)]],
      Description: [null, []],
      Menu: new FormControl('', [Validators.required]),
      Image: [
        null,
        [
          Validators.pattern(
            /.*\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|ico|jfif)$/i
          ),
          Validators.required,
        ],
      ],
      Images: [
        null,
        Validators.pattern(
          /.*\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|ico|jfif)$/i
        ),
      ],
    });
  }
  ngOnInit() {
    this.menuService.getMenu().subscribe({
      next: (data) => {
        this.Menus = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  onSubmit() {
    if (this.RecipeForm.valid) {
      const formData = this.RecipeForm.value;
      formData.Image = this.selectedImage;
      formData.Images = this.selectedImages;

      console.log(formData);

      this.receipeObj.name = formData.Name;
      this.receipeObj.price = formData.Price;
      this.receipeObj.menuId = formData.Menu;
      this.receipeObj.description = formData.Description;
      this.receipeObj.imageUrl = formData.Image;
      this.receipeObj.images = formData.Images;

      console.log(this.receipeObj);

      this.recipeService.createRecipe(this.receipeObj).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

  onMenuChange(event: Event) {
    const selectedId = parseInt((event.target as HTMLSelectElement).value, 10);
    this.selectedMenuId = selectedId;
  }
  onOneImageUpload(event: any) {
    const files: FileList | null = event.target.files;

    if (files && files.length > 0) {
      const file: File = files[0];

      this.selectedImage = `assets/images/${file.name}`;
      console.log(`File 1: ${file.name}, Size: ${file.size} bytes`);
    }
  }

  onImagesUpload(event: any) {
    const files: FileList | null = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);

        if (file) {
          this.selectedImages.push(`assets/images/receipe/${file.name}`);
          // console.log(`File ${i + 1}: ${file.name}, Size: ${file.size} bytes`);
        }
      }
    }
  }
  // onFileSelected(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     const file = inputElement.files[0];
  //     this.saveFileToAssetsDirectory(file);
  //   }
  // }
  // saveFileToAssetsDirectory(file: File) {
  //   // Ensure the `assets` directory structure exists
  //   const assetsDirectory = '/assets/images';

  //   // Create a FileReader to read the file
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const result = event.target?.result as string;

  //     // Determine the file name
  //     const fileName = file.name;

  //     // Create a URL to the image data
  //     const imageUrl = result;

  //     // Create a new Image element to display the image in your app if needed
  //     // const img = new Image();
  //     // img.src = imageUrl;
  //     // document.body.appendChild(img);

  //     // You can use the imageUrl and fileName as needed or save it in your Angular application
  //     console.log('Image URL:', imageUrl);
  //     console.log('Image File Name:', fileName);
  //     this.imageService.saveImageToAssetsDirectory(fileName, imageUrl);
  //     console.log(this.imageService.getImage(fileName));
  //   };

  //   reader.readAsDataURL(file);
  // }
}
