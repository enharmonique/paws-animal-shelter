import {Animal} from "./animal.model";

export class WishlistEntry {
  id?: string;
  idUser!: string | null;
  idAnimal!: string;
}
