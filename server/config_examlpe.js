ServiceConfiguration.configurations.upsert(
    { service: 'facebook'},
    {
        $set: {
            appId: 'abcdef',
            secret: 'abcdef'
        }
    }
);
ServiceConfiguration.configurations.upsert(
    { service: 'google'},
    {
        $set: {
            clientId: 'abcdef',
            secret: 'abcdef'
        }
    }
);
ServiceConfiguration.configurations.upsert(
    { service: 'twitter'},
    {
        $set: {
            consumerKey: 'abcdef',
            secret: 'abcdef'
        }
    }
);
ServiceConfiguration.configurations.upsert(
    { service: 'github'},
    {
        $set: {
            clientId: 'abcdef',
            secret: 'abcdef'
        }
    }
);
ServiceConfiguration.configurations.upsert(
    { service: 'kadira'},
    {
        $set: {
            appId: 'abcdef',
            secret: 'abcdef'
        }
    }
);
