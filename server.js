const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const { name, age, gender } = req.body;

  res.send(`
    <h2>Thông tin đã nhận:</h2>
    <p><strong>Họ tên:</strong> ${name}</p>
    <p><strong>Tuổi:</strong> ${age}</p>
    <p><strong>Giới tính:</strong> ${gender === 'male' ? 'Nam' : 'Nữ'}</p>
    <a href="/ThucHanh4.html">Quay lại</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
