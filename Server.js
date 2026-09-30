const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. MEANINGFUL LOGGING (हर रिक्वेस्ट को फाइल में सेव करने के लिए)
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use((req, res, next) => {
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${req.ip}\n`;
    console.log(logMessage.trim()); // कंसोल पर दिखेगा
    logStream.write(logMessage);     // फाइल में सेव होगा
    next();
});

// 2. HEALTH CHECK ENDPOINT (टास्क की सबसे मुख्य मांग)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString(),
        uptime: `${Math.round(process.uptime())} seconds`,
        environment: process.env.NODE_ENV || 'production',
        checks: {
            server: 'OK',
            database: 'MOCK_CONNECTED'
        }
    });
});

// सैंपल डेटा API (इंटर्नशिप पोर्टल के लिए)
app.get('/api/internships', (req, res) => {
    res.json([
        { id: 1, title: "Full-Stack Developer", company: "EdVyro Tech", Duration: "6 Months" },
        { id: 2, title: "Frontend Engineer", company: "Web Solutions", Duration: "3 Months" }
    ]);
});

// 3. GLOBAL ERROR HANDLING (सुरक्षा के लिए)
app.use((err, req, res, next) => {
    const errorLog = `[ERROR] [${new Date().toISOString()}] ${err.message}\n`;
    fs.appendFileSync('error.log', errorLog);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});
