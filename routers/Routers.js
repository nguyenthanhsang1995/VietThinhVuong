const express = require('express')
const Router = express.Router();

const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');

Router.get('/', HomeControllers.home);
// Add routers in page
Router.get('/home', HomeControllers.home);
Router.get('/about', HomeControllers.about);
Router.get('/accessibility', HomeControllers.accessibility);
Router.get('/affiliations', HomeControllers.affiliations);
Router.get('/board_management', HomeControllers.board_management);
Router.get('/careers', HomeControllers.careers);
Router.get('/contact', HomeControllers.contact);
Router.get('/disclaimer', HomeControllers.disclaimer);
Router.get('/history', HomeControllers.history);

Router.get('/New_events', HomeControllers.newEvents);
Router.get('/Our_products', HomeControllers.ourProducts);
Router.get('/responsible_investment', HomeControllers.responsible_investment);
Router.get('/segregated_managed_cccounts', HomeControllers.segregated_managed_accounts);
Router.get('/Vietnam_debt_fund_SPC', HomeControllers.Vietnam_debt_fund_SPC);
Router.get('/Vietnam_enterprise_investments_limited', HomeControllers.Vietnam_enterprise_investments_limited);
Router.get('/VietNam', HomeControllers.VietNam);


Router.get('/*', ErrorControllers.error);

module.exports = Router