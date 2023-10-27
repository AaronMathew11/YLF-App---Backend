var User = require("../models/user");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var config = require("../config/config");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

module.exports = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    console.log("payload is : ",jwt_payload);
    const user = await User.findById(jwt_payload.id).exec();
    if (user) return done(null, user);
    else return done(null, false);
    // if (err) return done(err, false);
  } catch (error) {
    return done(error, false);
  }
});
