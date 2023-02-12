// const passport = require("passport");
// require("./db/passportConfig")(passport);
const app = require("./index.js");

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