const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/trains', async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }