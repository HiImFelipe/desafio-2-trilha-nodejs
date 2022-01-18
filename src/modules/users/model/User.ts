import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public created_at: Date;
  public updated_at: Date;
  public name: string;
  public email: string;
  public admin = false;

  constructor() {
    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  turnIntoAdmin(): void {
    this.admin = true;
  }
}

export { User };
