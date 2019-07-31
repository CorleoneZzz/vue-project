;(function () {
    window.lo =
        {
            get: get,
            set: set
        };

    function set(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }

    function get(key) {
        let json = localStorage.getItem(key);
        if (json) {
            return JSON.parse(json)
        }
    }
})();