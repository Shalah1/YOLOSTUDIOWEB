

export default (req, res) => {
    if (req.method === 'POST') {

      const { username, password } = req.body;

      if (username === 'user' && password === 'password') {
        return res.status(200).json({ message: 'Authentication successful' });
      } else {
        return res.status(401).json({ message: 'Authentication failed' });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  };
  