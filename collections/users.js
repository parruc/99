var password = AccountsTemplates.removeField('password');
var email = AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: 'username',
      type: 'text',
      required: true,
      func: function(value){
          if (Meteor.isClient) {
              console.log("Validating username...");
              var self = this;
              Meteor.call("userExists", value, function(err, userExists){
                  if (!userExists)
                      self.setSuccess();
                  else
                      self.setError(userExists);
                  self.setValidating(false);
              });
              return;
          }
          // Server
          return Meteor.call("userExists", value);
      },
  },
  email,
  password
]);
