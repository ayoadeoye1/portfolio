import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import cookieSession from 'cookie-session';
import { Strategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes/psp.router.js';
import UserDtl from './models/psp.model.js';

passport.use(new Strategy({
    callbackURL: '/v1/goauth/callback',
    clientID: process.env.Client_ID,
    clientSecret: process.env.Client_secret
},
async(accessToken, refreshToken, profile, done)=>{
    const savedUsr = new UserDtl(profile)
    await savedUsr.save();
    done(null, profile);
    console.log(profile);
}))

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser(async(id, done)=>{
    const findUsr = await UserDtl.findOne({id: id})
    done(null, findUsr)
})

const app = express()



app.use(cookieSession({
    name: 'session',
    maxAge: 24*60*60*1000,
    keys: [process.env.KEY1, process.env.KEY2]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('./build'));

app.use('/v1', router);

app.get('/*', (req, res)=>{
    res.sendFile('index.html', { root: './build'});
})

export default app;