const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");

// Set up the Passport strategy:

passport.use(
    new LocalStrategy(function(username, password, done) {
        // Find the user in the database
        const user = helper.findByUsername(username, async function (err, user) {
            const matchedPassword = await bcrypt.compare(password, user.password);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "Incorrect username." });
            }
            if (!matchedPassword) {
                return done(null, false, { message: "Incorrect password." });
            }
            return done(null, user);

        });
    }
));

// Serialize a user

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// Deserialize a user

passport.deserializeUser(function(id, done) {
    helper.findById(id, function(err, user) {

        if (err) {
            console.log(err);
        }
        done(err, user);
    });
}
);
