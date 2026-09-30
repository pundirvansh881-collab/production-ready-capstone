# Production-Ready Capstone Portal

यह एक पॉलिश्ड, फुल-स्टैक इंटर्नशिप पोर्टल है जिसे प्रोडक्शन गाइडलाइंस के अनुसार तैयार किया गया है।

## विशेषताएं (Features Passed)
- **Mobile Experience:** पूर्ण रूप से मोबाइल-फ्रेंडली और रिस्पॉन्सिव यूजर इंटरफेस।
- **Meaningful Logging:** सभी इनकमिंग रिक्वेस्ट `access.log` में सेव होती हैं और एरर `error.log` में जाते हैं।
- **Health Checks:** `/health` एंडपॉइंट के जरिए सर्वर और रिसोर्स की लाइव स्थिति जांची जा सकती है।

## प्रोजेक्ट सेटअप (Setup Instructions)
1. डिपेंडेंसी इनस्टॉल करें:
   ```bash
   npm install express cors
   ```
2. सर्वर चालू करें:
   ```bash
   node server.js
   ```
3. ब्राउज़र में `index.html` फ़ाइल को ओपन करें।
