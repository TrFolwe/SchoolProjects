const LocalStrategy = require("passport-local").Strategy;
const User = require("./User");
const UserControl = new User();

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = UserControl.getUserByEmail(email);
    if (user.password !== password)
      return done(null, false, { message: "Şifre doğrulanamadı!" });
    done(null, user);
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((id, done) =>
    done(null, UserControl.getUserById(id))
  );
}

module.exports = initialize;
