const api_url = "https://api.telegram.org/bot";
const file_api_url = "https://api.telegram.org/file/bot";
const token = "1928555652:AAGk3oYaHlx-MLLnclv8T2TVtJhlTXX9oJc";
const channel_uname = "zonechill";

const yt_tokens = [
    "AIzaSyCko11Nnujt1K-YPEhwYAgp3S6IpsIuxeA",
    "AIzaSyAEnbBY3SPdwImzX5gek4djK7mrNNd-fow",
    "AIzaSyDLXVw5lO1QEFR7ob21iLj_4e0kOON5oEw",
    "AIzaSyAQBgSsK2goleYjY3fINWnNQfu9gX6zhdQ",
    "AIzaSyAah-ibNXzJx8ejbMsfPtYY1mrQTMzW7Rs",
    "AIzaSyCbDW_Tew_bDVQpBpZdKzNMB4yWO2a9ijw",
    "AIzaSyCyYTbCtXUAiLyrrBZ7abMiDCttuHOXoVc",
    "AIzaSyB5L9fS7UFE6Ew9uV1v7FSTQp2lEf82-_E",
    "AIzaSyA9d3z77Y3oDDhrfw7dPKn5hg4FR4R6pCI",
    "AIzaSyCD26j-0gnUmimCp5feCSm1fMtt3J5dZTc",
    "AIzaSyD2O9bJtRZYXMpuye8GHWm4jZ9rM1i21yM",
    "AIzaSyA12g4EMxJvnr4J5uzg1EvjxR54qd0SGJ0",
    "AIzaSyCWFsQKsje5hHBxWpTKvH8RkCRBEpjBF18",
    "AIzaSyCKgK-pA1ON_U1rIZpiu_hDwbrq9AaAcwI",
    "AIzaSyDoWNxdHrKhdEIJTdXu_ov8bSQOJ29wdsk",
    "AIzaSyC2ZHymch3Q63fg0hryap1f80iiJLZS5ac",
    "AIzaSyAK1a-oxOXujqQlRRYd9n3AAkpVOXND6iw",
    "AIzaSyC8oRIIVUmZdcVZqO2ApmcGi8UjcCjHWXc",
    "AIzaSyArsfXA05cfiyJl78O3tRH1NRszXGwbeIg",
    "AIzaSyDRnY9iWGKgojArIHEv5ej1blwFzajeFLI",
];
const yt_api_url = "https://www.googleapis.com/youtube/v3";
const yt_channel_elza = "UCUEoKLBj-lelT29QAEkkg2A";

var channel_name__ = "";
var s_mem = 0;

const pages_num = $("body").html().match(/page_*\d?/g).length;

const req_url = api_url + token;
const f_req_url = file_api_url + token;

setInterval(increment, 1000); 

function timeAgoConvert(date) {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    let re = null;

    if (interval > 1) {
        time_ = Math.floor(interval);
        one_l = parseInt(time_.toString().substr(-1));
        two_l = parseInt(time_.toString().substr(-2));

        if (one_l === 1 && two_l < 11) {
            return 'год';
        }
        else if (two_l > 20 && one_l === 1) {
            return time_ + ' год';
        }
        else if (two_l > 20 && one_l > 1 && one_l < 5) {
            return time_ + ' года';
        }
        else if (5 > one_l && one_l > 1 && two_l < 11) {
            return time_ + ' года';
        }
        else {
            return time_ + ' лет';
        }
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        time_ = Math.floor(interval);
        one_l = parseInt(time_.toString().substr(-1));
        two_l = parseInt(time_.toString().substr(-2));

        if (one_l === 1 && two_l < 11) {
            return 'месяц';
        }
        else if (two_l > 20 && one_l === 1) {
            return time_ + ' месяц';
        }
        else if (two_l > 20 && one_l > 1 && one_l < 5) {
            return time_ + ' месяца';
        }
        else if (5 > one_l && one_l > 1 && two_l < 11) {
            return time_ + ' месяца';
        }
        else {
            return time_ + ' месяцев';
        }
    }

    interval = seconds / 86400;
    if (interval > 1) {
        time_ = Math.floor(interval);
        one_l = parseInt(time_.toString().substr(-1));
        two_l = parseInt(time_.toString().substr(-2));

        if (one_l === 1 && two_l < 11) {
            return 'день';
        }
        else if (two_l > 20 && one_l === 1) {
            return time_ + ' день';
        }
        else if (two_l > 20 && one_l > 1 && one_l < 5) {
            return time_ + ' дня';
        }
        else if (5 > one_l && one_l > 1 && two_l < 11) {
            return time_ + ' дня';
        }
        else {
            return time_ + ' дней';
        }
    }

    interval = seconds / 3600;
    if (interval > 1) {
        time_ = Math.floor(interval);
        one_l = parseInt(time_.toString().substr(-1));
        two_l = parseInt(time_.toString().substr(-2));

        if (one_l === 1 && two_l < 11) {
            return 'час';
        }
        else if (two_l > 20 && one_l === 1) {
            return time_ + ' час';
        }
        else if (two_l > 20 && one_l > 1 && one_l < 5) {
            return time_ + ' часа';
        }
        else if (5 > one_l && one_l > 1 && two_l < 11) {
            return time_ + ' часа';
        }
        else {
            return time_ + ' часов';
        }
    }

    interval = seconds / 60;
    if (interval > 1) {
        time_ = Math.floor(interval);
        one_l = parseInt(time_.toString().substr(-1));
        two_l = parseInt(time_.toString().substr(-2));

        if (one_l === 1 && two_l < 11) {
            return 'минуту';
        }
        else if (two_l > 20 && one_l === 1) {
            return time_ + ' минуту';
        }
        else if (two_l > 20 && one_l > 1 && one_l < 5) {
            return time_ + ' минуты';
        }
        else if (5 > one_l && one_l > 1 && two_l < 11) {
            return time_ + ' минуты';
        }
        else {
            return time_ + ' минут';
        }
    }

    time_ = Math.floor(seconds);
    one_l = parseInt(time_.toString().substr(-1));
    two_l = parseInt(time_.toString().substr(-2));

    if (one_l === 1 && two_l < 11) {
        return 'секунду';
    }
    else if (two_l > 20 && one_l === 1) {
        return time_ + ' секунду';
    }
    else if (two_l > 20 && one_l > 1 && one_l < 5) {
        return time_ + ' секунд';
    }
    else if (5 > one_l && one_l > 1 && two_l < 11) {
        return time_ + ' секунд';
    }
    else {
        return time_ + ' секунды';
    }
}

function utc_to_user_tz(api_time) {
    let date_obj = new Date(api_time);
    return date_obj.valueOf();
}

function NumbersFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];

    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });

    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

function numberPretify(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function move_to_page(page_int, page_hash = null) {
    if (page_int) {
        page_int = parseInt(page_int);
    } else if (page_hash) {
        page_int = $(page_hash.replace("#", ".")).attr("id").replace(/[^+\d]/g, "");
    }
    const page_ = $("#page_"+page_int);

    location.hash = page_.attr("class");

    page_.css("display", "block");

    for (let i = 0; i < pages_num; i++) {
        if (i != page_int) {
            $("#page_"+i).css("display", "none");
        }
    }

    /*
    Просто и понятно
    Ненужные контейнеры отключаем, а нужный включаем
    */
}

function api_tg_status_set(success = false) {
    if (success) {
        status = "OK";
    } else {
        status = "ERROR";
    }

    $("#telegram_api_status_").html(`Telegram API: ${status}`);
}

function api_yt_status_set(success = false) {
    if (success) {
        status = "OK";
    } else {
        status = "ERROR";
    }

    $("#youtube_api_status_").html(`YouTube API: ${status}`);
}

function get_channel_data_yt(callback) {
    const method = "channels";

    var make_request_ = function() {
        $.ajax({
            url: `${yt_api_url}/${method}`,
            type: "GET",
            data: {
                "part": "statistics",
                "key": yt_tokens[Math.floor(Math.random()*yt_tokens.length)],
                "id": yt_channel_elza,
            },

            success: function(o) {
                callback(o);
                api_yt_status_set(true);
            },

            error: function() {
                console.log("Error! Could not get channel data from YouTube.");
                api_yt_status_set();
                make_request_();
            },
        });
    }
    make_request_();
}

function get_video_yt_stat(callback, video_id) {
    const method = "videos";

    var make_request_ = function() {
        $.ajax({
            url: `${yt_api_url}/${method}`,
            type: "GET",
            data: {
                "part": "statistics",
                "key": yt_tokens[Math.floor(Math.random()*yt_tokens.length)],
                "id": video_id,
            },

            success: function(o) {
                callback(o["items"][0]["statistics"]);
                api_yt_status_set(true);
            },

            error: function() {
                console.log("Error! Could not get video statistics from YouTube.");
                api_yt_status_set();
                make_request_();
            },
        });
    }
    make_request_();
}

function get_last_videos_yt(callback) {
    const method = "search";

    var make_request_ = function() {
        $.ajax({
            url: `${yt_api_url}/${method}`,
            type: "GET",
            data: {
                "part": "snippet",
                "channelId": yt_channel_elza,
                "maxResults": 10,
                "order": "date",
                "type": "video",
                "key": yt_tokens[Math.floor(Math.random()*yt_tokens.length)],
            },

            success: function(o) {
                const items = o['items'];
                const stat = o['statistics'];
                var array_videos = [];

                for (let i = 0; i < items.length; i++) {
                    const snippet_ = items[i]["snippet"];
                    const published = utc_to_user_tz(snippet_["publishTime"]);

                    array_videos.push({
                        "video_id": items[i]["id"]["videoId"],
                        "video_title": snippet_["title"],
                        "video_description": snippet_["description"],
                        "video_published": published,
                        "channel_title": snippet_["channelTitle"],
                        "channel_id": snippet_["channelId"],
                    });
                }

                callback(array_videos);

                api_yt_status_set(true);
            },

            error: function(r) {
                console.log("Error! Could not get video list from YouTube.");
                // $("#youtube_videos_container_").append("<p class=\"error_api_text\">Произошла ошибка! Не удалось выполнить запрос к API.</p>");
                api_yt_status_set();
                make_request_();
            },
        });
    }
    make_request_();
}

function set_last_video_yt() {
    get_last_videos_yt(function(data) {
        if (data.length) {
            for (let i = 0; i < data.length; i++) {
                const array_ = data[i];

                get_video_yt_stat(function(data) {
                    const template_video_block = `
                    <div class="col">
                        <div class="card shadow-sm">
                        <div class="video_preview_yt">
                            <iframe width="100%" style="display:block;margin:auto;height:40%" src="https://www.youtube.com/embed/${array_['video_id']}"
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>

                        <div class="card-body">
                            <p class="card-text video_title_yt">${array_['video_title']}</p>
                            <p class="card-text video_description_yt" id="yt_desc_${i}">${array_['video_description']}</p>
                            <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                                <a href="https://www.youtube.com/channel/${array_["channel_id"]}" class="channel_link_yt" target="_blank">
                                    <i class="fab fa-youtube channel_title_icon"></i> ${array_['channel_title']}
                                </a>
                                <br/>
                                <i class="far fa-eye"></i> ${NumbersFormatter(data["viewCount"])} | 
                                <i class="far fa-heart"></i> ${NumbersFormatter(data["likeCount"])} |
                                <i class="far fa-comments"></i> ${NumbersFormatter(data["commentCount"])}
                                <br/>
                                <p id="${array_['video_id']}_pub"></p> 
                                <script>setInterval(function(){$("#${array_['video_id']}_pub").text(timeAgoConvert(new Date(Date.now()-(Date.now()-${data["video_published"]})))+" назад")},1000)</script>
                            </small>
                            </div>
                        </div>
                        </div>
                    </div>
                    `;

                    $("#youtube_videos_container_").append(template_video_block);

                    $('#yt_desc_'+i).linkify({
                        target: "_blank"
                    });

                }, array_["video_id"]);
            }
        } else {
            // $("#youtube_videos_container_").append("<p class=\"error_api_text\">Произошла ошибка! Не удалось получить массив данных о видео.</p>");
            // pass
        }
    });
}

function channel_yt_set() {
    get_channel_data_yt(function(data) {
        console.log(data);
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
                api_tg_status_set(true);
            } else {
                console.log("Error get channel json data!");
                api_tg_status_set();
            }
        },

        error: function() {
            console.log("Error! Failed to query Telegram API and get channel information.");
            api_tg_status_set();
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
            api_tg_status_set(true);
        },

        error: function() {
            console.log("Error! Failed to query Telegram API and get channel information.");
            api_tg_status_set();
        },
    });
}

function get_channel_photo(photo_path) {
    return `${f_req_url}/${photo_path}`;
}

function set_channel_link_() {
    $("#tg_channel_link_share").attr("href", "https://t.me/"+channel_uname);
}

function create_pinned_message() {
    get_pinned_message(function(data) {
        if (data) {
            try {
                let message_pin_body = data["text"].replace(/\n/g, '<br/>');

                $(".pinned_message_caption").html(message_pin_body);
            } catch {
                // pass
            }
        } else {
            console.log("Pinned message set skipped.")
        }
    });
}

function get_pinned_message(callback) {
    get_channel(function(data) {
        try {
            let msg = data["pinned_message"];
            let link_msg = `https://t.me/${channel_uname}/${msg['message_id']}`;

            try {
                caption = msg['caption'];
            } catch {
                console.log("Error get message caption!");
            }

            let body_message = {
                "text": caption,
                "link": link_msg,
            }

            callback(body_message)
        } catch {
            console.log("Not found pinned messages!");
            callback(null);
        }
    });
}

function set_pin_comments() {
    get_channel(function(data) {
        const pin = data["pinned_message"]['message_id'];

        $(".comments_block_box").html(`
        <script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-discussion="zonechill/${pin}" 
        data-comments-limit="15" data-colorful="1" data-color="343638" data-dark="1" data-dark-color="FFFFFF"></script>
        `);
    });
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
        let desc_formatted = _l_channel_desc.replace(/\n/g, '<br/>');

        $(".text_channel_desc").html(desc_formatted);

        $('.text_channel_desc').linkify({
            target: "_blank"
        });
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
            let count_ = numberPretify(o['result']);

            if (s_mem != count_) {
                s_mem = count_;

                setCounter(count_);
                $("title").text(`${channel_name__} - ${count_} SUBS`);
            }    

            api_tg_status_set(true);
        },

        error: function() {
            console.log("Error! Failed to query Telegram API and get channel information.");
            api_tg_status_set();
        },
    });
}

function call_() {
    channel_image();
    channel_name();
    channel_desc();
    set_channel_link_();

    set_pin_comments();

    set_last_video_yt();
    channel_yt_set();

    create_pinned_message();
    setInterval(create_pinned_message(), 5000);
}

function setCounter(v) {
    let counter = $(".subs_count_text");

    counter.text(v);
}
    
$(document).ready(function() {
    $("body").click(function(event) {
        let obj_id = event.target.id;
        let id_int = obj_id.replace(/[^+\d]/g, "");

        if (obj_id.indexOf("#page_") && id_int) {
            move_to_page(id_int);
        }
    });

    // ready call
    call_();

    if (location.hash) {
        move_to_page(false, location.hash);
    }

});
