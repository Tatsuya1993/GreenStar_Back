// Express導入
const express = require('express');
const app = express();
const port = 3000;

// テスト用
app.get('/',(req,res) => res.send('RESR API test'));
app.listen(port, () => console.log(`【Test 】Using Port:${port}`));