var _config = {};

var trackPage = function(ev){
    if(typeof _config !== "undefined" && typeof _config.webengage !== "undefined") {
        if(typeof _config.webengage.enableAnalytics !== "undefined") {
            if(_config.webengage.enableAnalytics == true) {
                webengage.track(ev, {
                    'location': document.location.href,
                    'timeStamp': new Date().getTime()
                });
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
