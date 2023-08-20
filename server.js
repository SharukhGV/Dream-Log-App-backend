// const passport = require("passport");
// require("./db/passportConfig")(passport);
const app = require("./index.js");
// const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');




const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://chic-kitsune-7beb31.netlify.app',
  clientID: 'cNTkBaEqR4hmAsZJ1o1PkcCWTFBtQ8vG',
  issuerBaseURL: 'https://dev-xz06mncmhh2gwqjf.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});




// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//      next();
// });

// const checkJwt = auth({
//   audience: '{yourApiIdentifier}',
//   issuerBaseURL: `https://{yourDomain}/`,
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