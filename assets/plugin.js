var _config = {};

var trackPage = function(ev){
    if(typeof _config !== "undefined" && typeof _config.webengage !== "undefined") {
        if(typeof _config.webengage.enableAnalytics !== "undefined") {
            if(_config.webengage.enableAnalytics == true) {
                var checkWebengageExists = function(ev){
                    if(webengage) {
                        webengage.track(ev, {
                            'location': document.location.href + window.location.search,
                            'timeStamp': new Date().getTime()
                        });
                    } else {
                        setTimeout(function(){
                            checkWebengageExists(ev);
                        }, 1000);
                    }                    
                };

                checkWebengageExists(ev);
            }
        }
    }
}

require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind("start", function(e, config) {
        _config = config;

        trackPage("page_start");
    });

    gitbook.events.bind("page.change", function(page) {
        trackPage("page_change");
    });
});
