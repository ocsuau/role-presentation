export interface Endpoint {
  getAll: () => Observable<Employee>
};

export type Employee = {
  id: number;
  name: string;
  imageUrl: string;
  role?: string;
  address: string;
};