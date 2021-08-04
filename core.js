$(document).ready(function() {
    const api_url = "https://api.telegram.org/bot";
    const file_api_url = "https://api.telegram.org/file/bot";
    const token = "1928555652:AAGk3oYaHlx-MLLnclv8T2TVtJhlTXX9oJc";
    const channel_uname = "zonechill";

    var channel_name__ = "";

    const req_url = api_url + token;
    const f_req_url = file_api_url + token;

    setInterval(increment, 1000);
    
    function api_status_set(success = false) {
        let status = "";
        
        if (success) {
            status = "OK";
        } else {
            status = "ERROR";
        }
        
        $(".status_api_text").text(`Telegram API: ${status}`);
    }

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
                    api_status_set(true);
                } else {
                    console.log("Error get channel json data!");
                    api_status_set();
                }
            },

            error: function() {
                console.log("Error! Failed to query Telegram API and get channel information.");
                api_status_set();
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
                api_status_set(true);
            },

            error: function() {
                console.log("Error! Failed to query Telegram API and get channel information.");
                api_status_set();
            },
        });
    }

    function get_channel_photo(photo_path) {
        return `${f_req_url}/${photo_path}`;
    }

    function image_set__(path_) {
        $(".channel_image_").attr("src", path_);
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
                
                api_status_set(true);
            },

            error: function() {
                console.log("Error! Failed to query Telegram API and get channel information.");
                api_status_set();
            },
        });
    }

    function call_() {
        channel_image();
        channel_name();
        channel_desc();
    }

    function setCounter(v) {
        let counter = $(".subs_count_text");
        
        counter.text(v);
    }

    // ready call
    call_();

})
