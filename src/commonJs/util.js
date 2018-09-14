let common = {
    ServerConfig: {},
    ServerConfigInit: function() {
        let domain = window.location.href.toLowerCase();

        if (domain.indexOf("localhost") > -1 || domain.indexOf(".dev") > -1) {            
            this.ServerConfig = this.ServerConfig_DEV;
        } else if (domain.indexOf(".prod") > -1) {
            this.ServerConfig = this.ServerConfig_PROD;
        } else {
            this.ServerConfig = this.ServerConfig_DEV;
        }
    },

    ServerConfig_DEV: {
        request: "https://5b90db803ef10a001445d108.mockapi.io"
    },

    dataStorage: {
        Save: function(name, value) {
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        },
        Get: function(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        Remove: function(name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = this.Get(name);
            if (cval != null)
                document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
};

export default common;