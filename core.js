$(document).ready(function() {
    const api_url = "https://api.telegram.org/bot";
    const file_api_url = "https://api.telegram.org/file/bot";
    const token = "1928555652:AAGk3oYaHlx-MLLnclv8T2TVtJhlTXX9oJc";
    const channel_uname = "zonechill";

    var n=0;

    const req_url =  api_url+token;
    const f_req_url = file_api_url+token;

    setInterval(increment, 1000);
    
    function get_channel() {
        const method = "getChat";
        
        $.ajax({
            url: `${req_url}/${method}`,
            type: "GET",
            data: {"chat_id": `@${channel_uname}`},
            dataType: "jsonp",

            success: function (o) {
                return JSON.parse(o);
            },

            error: function () {
                console.log("Error! Failed to query Telegram API and get channel information.")
            },
        });
    }
    
    function get_channel_photo_path(photo_file_id) {
        const method = "getFile";
        
        $.ajax({
            url: `${req_url}/${method}`,
            type: "GET",
            data: {"file_id": photo_file_id},

            success: function (o) {
                return o['file_path'];
            },

            error: function () {
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
        let channel = get_channel();
        
        if (channel.ok) {
            let id_ = channel["result"]["photo"]["big_file_id"];
            let path_ = get_channel_photo_path(id_);
            
            // setting image to default img container
            image_set__(get_channel_photo(path_));
        } else {
            console.log("Error get channel json data!");
        }
    }

    function increment() {
        const method = "getChatMemberCount";

        $.ajax({
            url: `${req_url}/${method}`,
            type: "GET",
            data: {"chat_id": `@${channel_uname}`},

            success: function (o) {
                let count_ = o['result'];

                setCounter(count_);
                $("title").text(`CHILL ZONE - ${count_} SUBS`);
            },

            error: function () {
                console.log("Error! Failed to query Telegram API and get channel information.")
            },
        });
    }

    function setCounter(v) {
        var counter=$(".counter");
        var old=counter.children(".counter-value");
        var oldContent=old.children(".counter-value-mask");

        var t=0.4;
        var d=t*0.0;
        var d2=t*0.3;
        var padding=55;
        var offset=5;
        var w=old.data("w");

        w+=padding;
        TweenMax.to(old,t,{delay:d,x:w,ease:Quad.easeIn});
        TweenMax.to(oldContent,t,{delay:d,x:-(w-offset),ease:Quad.easeIn});


        setTimeout(function(){old.remove()},t*1000);
        
        var neu=$("<div/>").addClass("counter-value").appendTo(counter);
        var neuContent=$("<div/>").addClass("counter-value-mask").appendTo(neu).text(v);
        
        w=neuContent.width();
        
        neu.data("w",w);
        neu.css({
            width:w
        })

        w+=padding;
        TweenMax.from(neu,t,{delay:d2,x:-w});
        TweenMax.from(neuContent,t,{delay:d2,x:w-offset});
    }
    
    // ready call
    channel_image();
    
  })
