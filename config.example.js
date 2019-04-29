let config = {}

config.salesforce = {}
config.salesforce.client_id = "salesforce_connected_app_clientID_goes_here"
config.salesforce.client_secret = "salesforce_connected_app_clientSecret_goes_here"
config.salesforce.sandboxRoot = 'https://your_sandbox_name.cs51.my.salesforce.com/'
config.salesforce.callbackRoot = 'http://yourCallback.com'

config.app={}
config.app.port = 3001 //or whatever port you want to run this applicaiton on. 

module.exports = config