$(document).ready(function(){
    var n=0;

    setInterval(increment, 1000);

    function increment(){
        $.ajax({
            url: "https://tight-forest-613e.koval-dev.workers.dev/",
            type: "GET",
            success: function (o) {
                setCounter(o['result']);
            },
            error: function () {
                console.log("Error! Failed to query Telegram API and get channel information.")
            },
        });
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
