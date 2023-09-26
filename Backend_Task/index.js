const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

const db = new sqlite3.Database(':memory:');

// This is to Create tables for Item and Invoice in our SQLite3 
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS Item (id INTEGER PRIMARY KEY, name TEXT, stock INTEGER, price REAL)');
  db.run('CREATE TABLE IF NOT EXISTS Invoice (id INTEGER PRIMARY KEY, items TEXT, subtotal REAL, taxes REAL, discount REAL, total REAL)');
});

app.use(express.json());
app.use(cors());

// Item Operations
//They will run on http://localhost:5000/items

// Add Item
app.post('/items', (req, res) => {
  const { name, stock, price } = req.body;
  const sql = 'INSERT INTO Item (name, stock, price) VALUES (?, ?, ?)';
  db.run(sql, [name, stock, price], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Item added successfully', id: this.lastID });
  });
});

// Get all Items
app.get('/items', (req, res) => {
  const sql = 'SELECT * FROM Item';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Edit Item
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const { name, stock, price } = req.body;
  const sql = 'UPDATE Item SET name = ?, stock = ?, price = ? WHERE id = ?';
  db.run(sql, [name, stock, price, itemId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Item updated successfully' });
  });
});

// Remove Item
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const sql = 'DELETE FROM Item WHERE id = ?';
  db.run(sql, [itemId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Item removed successfully' });
  });
});

// Get Item by ID
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const sql = 'SELECT * FROM Item WHERE id = ?';
  db.get(sql, [itemId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

// Invoice Operations

// Create Invoice
app.post('/invoices', (req, res) => {
  const { items, subtotal, taxes, discount, total } = req.body;
  const sql = 'INSERT INTO Invoice (items, subtotal, taxes, discount, total) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [items, subtotal, taxes, discount, total], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Invoice created successfully', id: this.lastID });
  });
});

// Get all Invoices
app.get('/invoices', (req, res) => {
  const sql = 'SELECT * FROM Invoice';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Edit Invoice
app.put('/invoices/:id', (req, res) => {
  const invoiceId = req.params.id;
  const { items, subtotal, taxes, discount, total } = req.body;
  const sql = 'UPDATE Invoice SET items = ?, subtotal = ?, taxes = ?, discount = ?, total = ? WHERE id = ?';
  db.run(sql, [items, subtotal, taxes, discount, total, invoiceId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Invoice updated successfully' });
  });
});

// Remove Invoice
app.delete('/invoices/:id', (req, res) => {
  const invoiceId = req.params.id;
  const sql = 'DELETE FROM Invoice WHERE id = ?';
  db.run(sql, [invoiceId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Invoice removed successfully' });
  });
});

// Get Invoice by ID
app.get('/invoices/:id', (req, res) => {
  const invoiceId = req.params.id;
  const sql = 'SELECT * FROM Invoice WHERE id = ?';
  db.get(sql, [invoiceId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

// Manage Operations

// Implement operations for updating items 
app.post('/manage/updateItems', (req, res) => {
  const { invoiceId, items } = req.body;
  const sql = 'UPDATE Item SET stock = stock - ? WHERE id = ?';
  

  items.forEach((item) => {
    db.run(sql, [item.quantity, item.itemId], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
    });
  });

  res.json({ message: 'Items updated successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
