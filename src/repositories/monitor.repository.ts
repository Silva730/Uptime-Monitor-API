import { db } from '../database/db.js';
import { Monitor } from '../models/monitor.js';

export async function getAll(): Promise<Monitor[]> {
  const [rows] = await db.execute(
    `SELECT
       id,
       name,
       url,
       status,
       last_check,
       http_status,
       response_time,
       last_error
     FROM monitors`
  );
  return rows as Monitor[];
}

export async function create(data: { name?: string; url: string }) {
  await db.execute(
    'INSERT INTO monitors (name, url) VALUES (?, ?)',
    [data.name || null, data.url]
  );
}

export async function updateStatus(
  id: number,
  status: 'UP' | 'DOWN',
  httpStatus: number | null,
  responseTime: number,
  errorMessage: string | null
) {
  await db.execute(
    `UPDATE monitors
     SET status = ?,
         http_status = ?,
         response_time = ?,
         last_error = ?,
         last_check = NOW()
     WHERE id = ?`,
    [status, httpStatus, responseTime, errorMessage, id]
  );
}

export async function saveIncident(
  monitorId: number,
  status: 'UP' | 'DOWN',
  httpStatus: number | null,
  responseTime: number,
  errorMessage: string | null
) {
  await db.execute(
    `INSERT INTO incidents
     (monitor_id, status, http_status, response_time, error_message)
     VALUES (?, ?, ?, ?, ?)`,
    [monitorId, status, httpStatus, responseTime, errorMessage]
  );
}
