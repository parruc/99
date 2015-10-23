Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

Template.main.helpers({
    rows: function () {
        return Rows.find();
    }
});
