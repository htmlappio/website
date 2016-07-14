This code snippet shows how to create a Odata account in the Gizur
development server. You can use this server to play around with but
it is reset from time to time and the accounts are deleted.

```
var log = console.log.bind(console, 'LOG');
var options = {url: Odata.DEV_URL, email: 'info@gizur.com'};
var f = function(res){ options.accountId=res.data[1].accountId; };

Odata.createAccount(options).then(f,f);
```

Generate a new password for the account. The password is included in the response
here for convenience. It is sent in a mail in the production server.

```
Odata.resetPassword(options).then(
  function(res) {
    options.password = res.data[0].password;
  }, log);
```

Check the contents of the options object: `options`

Save the options to be used by `hpm`:

```
var db = new ydn.db.Storage("config", {stores: [{ name: "backend", autoIncrement: false }]});
db.put("backend", options, "config");
```

You can check that it was saved like this: `db.get("backend","config").then(log)`


It is also possible to get help with Odata from the command line: `Odata.help('accounts');`
