$(document).ready(function(){
    var n=0;

    setInterval(increment, 1000);

    function httpGet(link_request)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", link_request, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    function increment(){
        let body = httpGet("https://tight-forest-613e.koval-dev.workers.dev/");

        try {
            let obj_ = $('<div></div>');
            obj_.html(o);

            setCounter($('tgme_page_extra', obj_));
        } catch {
            console.log("Failed to get channel info.");
        }
    }

    function setCounter(v){
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
  })
