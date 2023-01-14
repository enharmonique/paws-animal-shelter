export class Product {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;

  constructor(id=0, name='', description='',category='',imageUrl='') {
    this.id=id;
    this.name=name;
    this.description=description;
    this.category=category;
    this.imageUrl=imageUrl;
  }
}
