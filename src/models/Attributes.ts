import { UserProps } from "./User";

export class Attributes<T extends UserProps> {
  constructor(private data: T) {}

  get<T extends keyof UserProps>(propName: T): number | string | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

}