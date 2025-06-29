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
      CREATE TABLE IF NOT EXISTS reservas (
                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                            nombreNovia TEXT,
                                            fechaBoda TEXT,
                                            tipoTocado TEXT,
                                            coords TEXT,
                                            foto TEXT,
                                            total REAL,
                                            enviado INTEGER DEFAULT 0
      );
    `);
  }

  async addReserva(reserva: any) {
    const query = `
      INSERT INTO reservas (nombreNovia, fechaBoda, tipoTocado, coords, foto, total)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
      reserva.nombreNovia,
      reserva.fechaBoda,
      reserva.tipoTocado,
      JSON.stringify(reserva.coords),
      reserva.photo,
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
}
