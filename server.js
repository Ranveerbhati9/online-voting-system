
const express = require('express');
const path = require('path');
const db = require('./src/db');
const authRoutes = require('./src/routes/auth');
const busRoutes = require('./src/routes/bus');
const bookingRoutes = require('./src/routes/booking');
const trackRoutes = require('./src/routes/track');
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/bus', busRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/track', trackRoutes);
app.get('/', (req,res)=> res.redirect('/welcome.html'));
const PORT = process.env.PORT || 3000;
db.sync().then(()=> app.listen(PORT, ()=> console.log('Royal Jodhpur Transit running on http://localhost:'+PORT))).catch(err=>console.error(err));
