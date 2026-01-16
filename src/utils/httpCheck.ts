import axios from 'axios';
import { error } from 'node:console';

export async function checkUrl(url: string){
    const start = Date.now();
    try {
        const res = await axios.get(url, { timeout: 5000 });

        return {
            status: 'UP' as const,
            httpStatus: res.status,
            error: null,
            responseTime: Date.now() - start

        }
    } catch (err: any) {
        return {
            status: 'DOWN' as const,
            error: err.message,
            responseTime: Date.now() - start,
            httpStatus: err.res ? err.res.status : null,
        }
    }
};