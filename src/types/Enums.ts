export enum AccessLimiter {
    MyAccount = 'myAccount',
    MyOrganization = 'myOrganization',
    Anyone = 'anyone'
}

export enum ClientUriTypes {
    RedirectURI = 'redirectURI',
    PostLogoutRedirectUri = 'postLogoutRedirectUri',
    AllowedCorsOrigins = 'allowedCorsOrigins',
    ClientIndexUri = 'clientIndexUri'
}

export const getReadableAccessLimiter = (accessLimiter: AccessLimiter): string => {
    switch (accessLimiter) {
        case AccessLimiter.MyAccount: return 'My Account';
        case AccessLimiter.MyOrganization: return 'My Organization';
        case AccessLimiter.Anyone: return 'Anyone';
    }
};

export const getReadableClientUriType = (clientUriType: ClientUriTypes): string => {
    switch (clientUriType) {
        case ClientUriTypes.RedirectURI: return 'Redirect URI';
        case ClientUriTypes.PostLogoutRedirectUri: return 'Post-Logout Redirect URI';
        case ClientUriTypes.AllowedCorsOrigins: return 'Allowed CORS Origins';
        case ClientUriTypes.ClientIndexUri: return 'Client Index URI';
    }
};
