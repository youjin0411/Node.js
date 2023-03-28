varreport = {
    sum: 0,
    count: 0,
    add: function() {
        varargs = Array.prototype.slice.call(arguments);
        for (var i = 0; i < args.length; i++) {
            this.sum += args[i];
        }
    }
}