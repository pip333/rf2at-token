// api/verifyToken.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.body;
  const defaultToken = '3FyIj3Rrg2gcGBs30_EQXVaSsuiOSEpQ-zpyJem6XivO0';

  // 验证输入是否为 'zk'
  if (token && token.toLowerCase() === 'zk') {
    res.status(200).json({ 
      isValid: true,
      defaultToken 
    });
  } else {
    res.status(200).json({ 
      isValid: false 
    });
  }
}
