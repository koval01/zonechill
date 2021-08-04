$(document).ready(function() {
    const api_url = "https://api.telegram.org/bot";
    const file_api_url = "https://api.telegram.org/file/bot";
    const token = "1928555652:AAGk3oYaHlx-MLLnclv8T2TVtJhlTXX9oJc";
    const channel_uname = "zonechill";

    var channel_name__ = "";

    const req_url = api_url + token;
    const f_req_url = file_api_url + token;

    setInterval(increment, 1000);

    function urlify(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;

        return text.replace(urlRegex, function(url) {
            return '<a href="' + url + '">' + url.replace("https://", "") + '</a>';
        });
    }

    function get_channel(callback) {
        const method = "getChat";

        $.ajax({
            url: `${req_url}/${method}`,
            type: "GET",
            data: {
                "chat_id": `@${channel_uname}`
            },

            success: function(o) {
                if (o["ok"]) {
                    callback(o["result"]);
                } else {
                    console.log("Error get channel json data!");
                }
            },

            error: function() {
                console.log("Error! Failed to query Telegram API and get channel information.")
            },
        });
    }

    function get_channel_photo_path(photo_file_id, callback) {
        const method = "getFile";

        $.ajax({
            url: `${req_url}/${method}`,
            type: "GET",
            data: {
                "file_id": photo_file_id
            },

            success: function(o) {
                let path = o["result"]["file_path"];
                callback(path);
            },

            error: function() {
                console.log("Error! Failed to query Telegram API and get channel information.")
            },
        });
    }

    function get_channel_photo(photo_path) {
        return `${f_req_url}/${photo_path}`;
    }

    function image_set__(path_) {
        $(".image_channel__").attr("src", path_);
    }

    function channel_image() {
        get_channel(function(channel) {
            let id_ = channel["photo"]["big_file_id"];

            get_channel_photo_path(id_, function(path_) {
                image_set__(get_channel_photo(path_));
            });
        });
    }

    function channel_name() {
        get_channel(function(channel) {
            let _l_channel_name = channel["title"];

            $(".text_channel_name").text(_l_channel_name);
            channel_name__ = _l_channel_name;
        });
    }

    function channel_desc() {
        get_channel(function(channel) {
            let _l_channel_desc = channel["description"];
            let desc_formatted = urlify(_l_channel_desc.replace(/\n/g, '<br/>'))

            $(".text_channel_desc").html(desc_formatted);
        });
    }

    function increment() {
        const method = "getChatMemberCount";

        $.ajax({
            url: `${req_url}/${method}`,
            type: "GET",
            data: {
                "chat_id": `@${channel_uname}`
            },

            success: function(o) {
                let count_ = o['result'];

                setCounter(count_);
                $("title").text(`${channel_name__} - ${count_} SUBS`);
            },

            error: function() {
                console.log("Error! Failed to query Telegram API and get channel information.")
            },
        });
    }

    function call_() {
        channel_image();
        channel_name();
        channel_desc();
    }

    function setCounter(v) {
        var counter = $(".counter");
        var old = counter.children(".counter-value");
        var oldContent = old.children(".counter-value-mask");

        var t = 0.4;
        var d = t * 0.0;
        var d2 = t * 0.3;
        var padding = 55;
        var offset = 5;
        var w = old.data("w");

        w += padding;
        TweenMax.to(old, t, {
            delay: d,
            x: w,
            ease: Quad.easeIn
        });
        TweenMax.to(oldContent, t, {
            delay: d,
            x: -(w - offset),
            ease: Quad.easeIn
        });


        setTimeout(function() {
            old.remove()
        }, t * 1000);

        var neu = $("<p/>").addClass("counter-value").appendTo(counter);
        var neuContent = $("<p/>").addClass("counter-value-mask").appendTo(neu).text(v);

        w = neuContent.width() / 4;

        neu.data("w", w);
        neu.css({
            width: w
        })

        w += padding;
        TweenMax.from(neu, t, {
            delay: d2,
            x: -w
        });
        TweenMax.from(neuContent, t, {
            delay: d2,
            x: w - offset
        });
    }

    // ready call
    call_();

})
