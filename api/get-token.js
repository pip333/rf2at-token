// /api/get-token.js

export default function handler(req, res) {
    const { code } = req.query;

    // 判断输入是否为 "zk"
    if (code === 'zk') {
        // 从环境变量中获取 token
        const token = process.env.OAI_REFRESH_TOKEN;

        if (token) {
            res.status(200).json({ token });
        } else {
            res.status(500).json({ error: 'Token not found in environment variables' });
        }
    } else {
        res.status(403).json({ error: 'Unauthorized access' });
    }
}
