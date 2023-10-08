// pages/api/data-export.js

export default (req, res) => {
    if (req.method === 'GET') {
      // Handle data export logic here
  

      const dataToExport = ['item1', 'item2', 'item3'];
  

      return res.status(200).json(dataToExport);
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  };
  