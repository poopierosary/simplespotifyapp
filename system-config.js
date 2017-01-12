'use strict';
System.config({
    paths: {
        //specifying npm path(s)
        'npm:': 'lib/'
    },
    //map tells where the system loader to look for changes
    map: {
        //where the app is within the folder
        app: 'app',
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        // other libraries
        'rxjs': 'npm:rxjs'
    },
    packages: {
        app: { main: './main.js', defaultExtension: 'js' },
        rxjs: { defaultExtension: 'js' }
    }
});

//# sourceMappingURL=system-config.js.map
