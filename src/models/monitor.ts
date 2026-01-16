export interface Monitor {
    id: number;
    name: string;
    url: string;
    status: 'UP' | 'DOWN';
    last_check: Date;
}