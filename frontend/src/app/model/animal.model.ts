enum Type {
  CAT,
  DOG,
  RODENT,
  BIRD,
  REPTILE,
  EQUINE,
  FISH,
  AMPHIBIAN,
  INSECT
}

export class Animal {
  id!: string;
  name!: string;
  type!: Type;
  breed!: string;
  age!: string;
  dateAdded!: string;
  description!: string;
  imagePath!: string;
}
