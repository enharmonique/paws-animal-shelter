import {Animal} from "./animal.model";

export class WishlistEntry {
  id?: string;
  animal!: Animal;
  idUser!: string | null;
}
