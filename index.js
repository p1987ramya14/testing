const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'].toLowerCase();
    const isRedirectChecker = /checker|bot|spider/.test(userAgent);
    
    if (isRedirectChecker) {
        // Redirect checker sees this URL
        const targetUrl = 'https://roastandrelish.store/honey-chicken-recipe-french/';
        res.redirect(302, targetUrl);
    } else {
        // Regular visitors see this URL
        const visitorUrl = 'https://roastandrelish.store/';
        res.redirect(302, visitorUrl);
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Redirection service running on port ${port}`);
});
