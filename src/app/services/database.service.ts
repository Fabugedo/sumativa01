import { Injectable } from '@angular/core';
import { SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  private db!: SQLiteDBConnection;

  constructor(private sqlite: SQLiteConnection) {}

  async initializeDB() {
    this.db = await this.sqlite.createConnection('tocadosDB', false, 'no-encryption', 1, false);
    await this.db.open();



    await this.db.execute(`


      CREATE TABLE reservas (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              nombreNovia TEXT,
                              email TEXT,
                              fechaBoda TEXT,
                              tipoTocado TEXT,
                              tipoAro TEXT, -- nuevo campo
                              coords TEXT,
                              foto TEXT,
                              total REAL,
                              enviado INTEGER DEFAULT 0
      );
    `);
  }

  async addReserva(reserva: any) {
    const query = `
      INSERT INTO reservas (nombreNovia, email, fechaBoda, tipoTocado, tipoAro, coords, foto, total)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      reserva.nombreNovia,
      reserva.email,
      reserva.fechaBoda,
      reserva.tipoTocado,
      reserva.tipoAro || null,
      JSON.stringify(reserva.coords),
      reserva.foto,
      reserva.total
    ];
    await this.db.run(query, values);
  }

  async getReservas() {
    const res = await this.db.query('SELECT * FROM reservas');
    return res.values ?? [];
  }

  async deleteReserva(id: number) {
    const query = 'DELETE FROM reservas WHERE id = ?';
    await this.db.run(query, [id]);
  }

  async marcarComoEnviado(id: number) {
    const query = 'UPDATE reservas SET enviado = 1 WHERE id = ?';
    await this.db.run(query, [id]);
  }
  async updateReserva(reserva: any) {
    const query = `
    UPDATE reservas
    SET nombreNovia = ?, fechaBoda = ?
    WHERE id = ?
  `;
    const values = [reserva.nombreNovia, reserva.fechaBoda, reserva.id];
    await this.db.run(query, values);
  }
  async updateReservaNombre(reserva: any) {
    const query = `
    UPDATE reservas
    SET nombreNovia = ?
    WHERE id = ?
  `;
    const values = [reserva.nombreNovia, reserva.id];
    await this.db.run(query, values);
  }


}
