// add routes
const express = require('express');
const text = require('jade/lib/nodes/text');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ 
    status: 'success',
    message: 'GET messages',
    data: {
        messages: [{
            id: 1,
            text: 'Hello World',
            user: 'Jelle'
        }]
    }
   });
});

module.exports = router;