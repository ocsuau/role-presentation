import { Employee } from "./types";

const toEmployee =
  (
    id: number,
    name: string,
    role: string,
    address: string,
    imageUrl: string,

  ): Employee => ({
    id,
    name,
    role,
    address,
    imageUrl
  });

export { toEmployee };