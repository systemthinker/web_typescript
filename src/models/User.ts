
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  

  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): number | string | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  

 


}
