

export default (req, res) => {
    if (req.method === 'POST') {

      const data = req.body;
      const processedData = data.map((item) => {
        // Your data processing code here
        return item;
      });
  
      return res.status(200).json(processedData);
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  };
  