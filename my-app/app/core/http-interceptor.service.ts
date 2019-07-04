class HttpInterceptor {

    constructor(private $q: angular.IQService) {}

    request(config: angular.IRequestConfig): angular.IRequestConfig {
        return config;
    }

    requestError(rejection: any) {
        return this.$q.reject(rejection);
    }

    response(response: angular.IHttpResponse<any>) {
        return response;
    }

    responseError(rejection: any) {
        return this.$q.reject(rejection);
    }
}

angular
    .module('myApp.core')
    .service('httpInterceptor', HttpInterceptor);