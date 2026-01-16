import { getAll } from '../repositories/monitor.repository.js';
import { check } from '../services/monitor.service.js';

export async function runUptimeCheck() {
  const monitors = await getAll();

  await Promise.all(
    monitors.map(monitor => check(monitor))
  );
}
