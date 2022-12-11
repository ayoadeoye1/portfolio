import express from 'express';
import passport from 'passport';

import { Fail, Dashboard } from '../controllers/psp.controller.js';
import { Author } from '../middlewares/authorize.js';

const router = express.Router();

router.get('/goauth/callback', passport.authenticate('google', {
   failureRedirect: '/v1/signin',
   session: false 
}), (req, res)=>{
   res.redirect('/v1/dashboard')
})

router.get('/goauth', passport.authenticate('google', { scope: ['email']}))

router.get('/fail', Fail)
// router.get('/dashboard', Author(), Dashboard)

export default router;