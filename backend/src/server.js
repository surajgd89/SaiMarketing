const express = require('express');
require('dotenv').config();
const products = require('./products.json');
const brands = require('./brands.json');
const profile = require('./profile.json');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
   try {
      const { name, email, mobile, subject, message } = req.body;

      console.log(req.body)

      const transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
         },
      });

      const mailOptions = {
         from: process.env.EMAIL_USER,
         to: 'suraj.gd89@gmail.com',
         subject: 'New Contact Query From Website',
         text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
   }

});

app.get('/api/brands', (req, res) => {
   res.json(brands);
});

app.get('/api/products', (req, res) => {
   res.json(products);
});

app.get('/api/profile', (req, res) => {
   res.json(profile);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});



