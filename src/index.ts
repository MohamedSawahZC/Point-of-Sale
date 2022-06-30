import app from './app';
import config from './config';
import db from './database';
const PORT = config.port || 3000;
const address: string = `0.0.0.0:${PORT}`;

db.connect().then((client) => {
  return client
    .query('SELECT NOW()')
    .then((res) => {
      client.release();
      console.log(res.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(PORT, () => {
  console.log(`starting app on  ${address}`);
});
