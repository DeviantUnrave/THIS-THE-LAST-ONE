const crypto = require('crypto');
const db = require('./http://localhost:3000/auth/login'); // Replace with your database connection

//Handles user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Query the database to check if the user exists
    const user = await db.query('SELECT * FROM users WHERE username = ?', [username]);

    if (user.length === 1) {
      //Hash the provided password using a simple hashing algorithm (e.g., SHA-256)
      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

      //Compare the hashed password with the stored hashed password in the database
      if (hashedPassword === user[0].password) {
        res.json({ user_id: user[0].user_id });
      } else {
        res.json({ error: 'Invalid credentials' });
      }
    } else {
      res.json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { loginUser };