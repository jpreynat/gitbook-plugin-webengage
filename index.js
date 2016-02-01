module.exports = {
    book: {
        assets: "./assets",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var webengageIntegratiomCode = "";
                var config = this.options.pluginsConfig.webengage || {"version": 5, "licenseCode": ""};
                
                config.version = config.version || 5;
                config.licenseCode = config.licenseCode || "";
                
                if(typeof config.licenseCode !== "undefined" && config.licenseCode.length > 0) {
                    if(config.version >= 5) {
                        webengageIntegratiomCode += '<script id="_webengage_script_tag" type="text/javascript"> \
                                    var webengage; \
                                    !function(e,t,n){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=e[n],g=" ",l="init options track onReady".split(g),a="feedback survey notification".split(g),c="options render clear abort".split(g),p="Open Close Submit Complete View Click".split(g),u="identify login logout setAttribute".split(g);if(!r||!r.__v){for(e[n]=r={__queue:[],__v:"5.0",user:{}},i=0;i<l.length;i++)o(r,[l[i]]);for(i=0;i<a.length;i++){for(r[a[i]]={},s=0;s<c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s<p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i<u.length;i++)o(r.user,["user",u[i]]);var f=t.createElement("script"),d=t.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==t.location.protocol?"//ssl.widgets.webengage.com":"//cdn.widgets.webengage.com")+"/js/widget/webengage-min-v-5.0.js",d.parentNode.insertBefore(f,d)}}(window,document,"webengage"); \
                                    \
                                    webengage.init("' + config.licenseCode + '"); \
                                </script>';
                    } else if(config.version == 4) {
                        webengageIntegratiomCode += '<script id="_webengage_script_tag" type="text/javascript"> \
                                    var _weq = _weq || {}; \
                                    _weq["webengage.licenseCode"] = "' + config.licenseCode + '"; \
                                    _weq["webengage.widgetVersion"] = "4.0"; \
                                     \
                                    (function(d){ \
                                        var _we = d.createElement("script"); \
                                        _we.type = "text/javascript"; \
                                        _we.async = true; \
                                        _we.src = (d.location.protocol == "https:"" ? "https://ssl.widgets.webengage.com" : "http://cdn.widgets.webengage.com") + "/js/widget/webengage-min-v-4.0.js"; \
                                        var _sNode = d.getElementById("_webengage_script_tag"); \
                                         \
                                        _sNode.parentNode.insertBefore(_we, _sNode); \
                                    })(document); \
                                </script>';
                    } else if(config.version < 4) {
                        webengageIntegratiomCode += '<script id="_webengage_script_tag" type="text/javascript"> \
                                    window.webengageWidgetInit = window.webengageWidgetInit || function(){ \
                                        webengage.init({ \
                                        licenseCode:"' + config.licenseCode + '" \
                                        }).onReady(function(){ \
                                        webengage.render(); \
                                        }); \
                                    }; \
                                     \
                                    (function(d){ \
                                        var _we = d.createElement("script"); \
                                        _we.type = "text/javascript"; \
                                        _we.async = true; \
                                        _we.src = (d.location.protocol == "https:"" ? "//ssl.widgets.webengage.com" : "//cdn.widgets.webengage.com") + "/js/widget/webengage-min-v-3.0.js"; \
                                        var _sNode = d.getElementById("_webengage_script_tag"); \
                                        _sNode.parentNode.insertBefore(_we, _sNode); \
                                    })(document); \
                                </script>';
                    }

                    return webengageIntegratiomCode;
                } else {
                    throw "WebEngage: Please specify valid licenseCode in book.json"
                }
            }
        }
    },
    hooks: {
    	
    }
};
