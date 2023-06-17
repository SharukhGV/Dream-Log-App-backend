// const passport = require("passport");
// require("./db/passportConfig")(passport);
const app = require("./index.js");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//      next();
// });

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});











// PASPORT CODE




// app.post(
//       "/auth/signup",
//       passport.authenticate("local-signup", { session: false }),
//       (req, res, next) => {
//         res.json({
//           user: req.user,
//         });
//       }
//     );
    
//     app.post(
//       "/auth/login",
//       passport.authenticate("local-login", { session: false }),
//       (req, res, next) => {
//         res.json({ user: req.user });
//       }
//     );