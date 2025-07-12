import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaGuard implements CanActivate {

  constructor(private db: DatabaseService, private router: Router) {}

  async canActivate(): Promise<boolean> {

    const reservas = await this.db.getReservas();
    if (reservas && reservas.length > 0) {
      return true;
    } else {

      this.router.navigate(['/datos']);
      return false;
    }
  }
}
