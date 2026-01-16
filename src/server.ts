import { app } from './app.js';
import { startCron } from './config/cron.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  startCron();
});
