(function($, window) {

    $(document).ready(function() {

        "use strict";

        function makeid(number) {
            var text = "",
                n = number || 4,
                possible = "0123456789";

            for(var i = 0; i < n; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }

        var id = makeid(4),
            url = window.location.origin + window.location.pathname + 'remote.html?h=' + id;
        
        var qrcode = new QRCode($('#qrcode')[0], {
            text: url,
            width: 150,
            height: 150,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

    });

}(jQuery, window));
