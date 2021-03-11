import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log(username, password, done);
  }),
);
