(function($, window) {

    $(document).ready(function() {

        "use strict";

        var code = window.location.search.substr(1).split('=')[1];
        $('#code').html(code);

        var socket = io.connect('http://192.168.0.111:8081');

        socket.emit('set pairingcode', code, false);

    });

}(jQuery, window));
