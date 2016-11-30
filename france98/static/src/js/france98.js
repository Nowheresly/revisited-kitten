(function() {

var instance = openerp;

instance.web.WebClient = instance.web.WebClient.extend({
    start: function () {
        var self = this;

        return $.when(this._super()).then(function() {
            if (jQuery.deparam !== undefined && jQuery.deparam(jQuery.param.querystring()).france98 !== undefined) {
                self.to_france98();
            }
            if (jQuery.deparam !== undefined && jQuery.deparam(jQuery.param.querystring()).starwars !== undefined) {
                self.to_star_wars();
            }
        });
    },
    to_france98: function () {
        this.france98 = true;
        $("body").addClass("kitten-mode-activated");
        $("body").css("background-image", "url(" + instance.session.origin + "/france98/static/src/img/f98-winner.jpg" + ")");
        if ($.blockUI) {
            var imgkit = Math.floor(Math.random() * 2 + 1);
            $.blockUI.defaults.message = '<img src="/france98/static/src/img/f98-waiting' + imgkit + '.gif" class="loading-kitten">';
        }
    },
    to_star_wars: function () {
        this.france98 = true;
        $("body").addClass("kitten-mode-activated");
        $("body").css("background-image", "url(" + instance.session.origin + "/france98/static/src/img/starwars3.jpg" + ")");
        if ($.blockUI) {
            var imgkit = Math.floor(Math.random() * 2 + 1);
            $.blockUI.defaults.message = '<img src="/france98/static/src/img/sw1-waiting' + imgkit + '.gif" class="loading-kitten">';
        }
    }

});
})();

// vim:et fdc=0 fdl=0 foldnestmax=3 fdm=syntax:
