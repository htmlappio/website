var options = {url: Odata.DEV_URL, email: 'info@gizur.com'};

var log = console.log.bind(console, 'LOG');
var f = function(res){ log(options.accountId=res.data[1].accountId) };

Odata.createAccount(options).then(f,f);
