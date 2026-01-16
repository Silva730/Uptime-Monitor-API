import { Monitor } from '../models/monitor.js';
import { checkUrl } from '../utils/httpCheck.js';
import * as repo from '../repositories/monitor.repository.js';

export async function check(monitor: Monitor) {
  const result = await checkUrl(monitor.url);


  if (monitor.status !== result.status) {
    await repo.saveIncident(
      monitor.id,
      result.status,
      result.httpStatus,
      result.responseTime,
      result.error
    );
  }

  await repo.updateStatus(
    monitor.id,
    result.status,
    result.httpStatus,
    result.responseTime,
    result.error
  );
}
