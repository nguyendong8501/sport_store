const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./api/routers/user.router');
const categoryRouter = require('./api/routers/categoy.router');
const publisherRouter = require('./api/routers/publisher.router');
const productRouter = require('./api/routers/product.router');
const authorRouter = require('./api/routers/author.router');
const commentRouter = require('./api/routers/comment.router');
const billRouter = require('./api/routers/bill.router');
const cartRouter = require('./api/routers/cart.router');
const adminRouter = require('./api/routers/admin.router');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://nguyenthedong:thed0nq1058@cluster0.wxg9m1j.mongodb.net/dotap');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())

userRouter(app);
categoryRouter(app);
publisherRouter(app);
productRouter(app);
authorRouter(app);
commentRouter(app)
billRouter(app);
cartRouter(app);
adminRouter(app);
// addressVnRouter(app);
app.get('/', (req, res) => {res.send('Welcome to sport_store')})

app.listen(port, () => console.log("Server running on port " + port));