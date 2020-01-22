import { Injectable } from '@angular/core';
import { Token } from '../models/token.model';
import { Payload } from '../models/payload.model';
import { Employee } from '../models/employee.model';

export const PAYLOAD_NAME = 'user_payload';

@Injectable({ providedIn: 'root' })
export class AuthService {
  payload: Payload;

  constructor() {
  }

  getToken(): Token {
    const payloadStr = localStorage.getItem(PAYLOAD_NAME);
    let payload: Payload;
    if (payloadStr) {
      payload = JSON.parse(window.atob(payloadStr));
    }
    const { token = {} as Token } = payload || {};
    return token;
  }

  getEmployee(): Employee {
    const payloadStr = localStorage.getItem(PAYLOAD_NAME);
    let payload: Payload;
    if (payloadStr) {
      payload = JSON.parse(window.atob(payloadStr));
    }
    const { employee = null } = payload || {};
    return employee;
  }

  setPayload(payload: Payload): void {
    this.payload = payload;
    localStorage.setItem(PAYLOAD_NAME, window.btoa(JSON.stringify(payload)));
  }

  getTokenExpirationDate(token: Token): Date {
    return new Date(token.expiresIn);
  }

  isTokenExpired(token?: Token): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    return !(date.getTime() > new Date().getTime());
  }

  signOut() {
    this.payload = null;
    localStorage.removeItem(PAYLOAD_NAME);
  }

}
