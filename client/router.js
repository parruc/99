Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'//,
    //waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
    this.route('game', {path: '/'});
});

//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()){
            this.render(this.loadingTemplate);
        }
        else{
            this.render('accessDenied');
        }
    }
    else{
        this.next();
    }
}
