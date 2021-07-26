import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}



export class User {

  id =  this.get('id')
  url = 'http://localhost:3000';

  

  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): number | string | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

 
  

  fetch(): void {
    axios
      .get(`${this.url}/users/${this.id}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    
    if (this.get('id')){
      
      axios.put(`${this.url}/users/${this.id}`, this.data)
    } else {
      axios.post(`${this.url}/users`,this.data)
      
    }
  }
}
