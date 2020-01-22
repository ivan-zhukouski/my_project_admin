import { Token } from './token.model';
import { Employee } from './employee.model';

export interface Payload {
  token: Token;
  employee: Employee;
}
