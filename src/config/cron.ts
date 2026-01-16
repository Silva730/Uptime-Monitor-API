import cron from 'node-cron';
import { runUptimeCheck } from '../jobs/uptime.job.js';

export function startCron(){
    cron.schedule('*/1 * * * *', async () => {
        await runUptimeCheck();
});
}