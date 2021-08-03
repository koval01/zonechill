(function() {
    var n=0;

    setInterval(increment,1000);

    function increment(){
        n++;
        setCounter(n);
    }

    function setCounter(v){
        let counter=document.querySelector(".counter");
        let old=counter.getElementsByClassName("counter-value");
        let oldContent=old.getElementsByClassName("counter-value-mask");

        let t=0.4;
        let d=t*0.0;
        let d2=t*0.3;
        let padding=55;
        let offset=5;
        let w=old.data("w");

        w+=padding;
        TweenMax.to(old,t,{delay:d,x:w,ease:Quad.easeIn});
        TweenMax.to(oldContent,t,{delay:d,x:-(w-offset),ease:Quad.easeIn});


        setTimeout(function(){old.remove()},t*1000);
        
        var neu=document.querySelector("<div/>").classList.add("counter-value").appendTo(counter);
        var neuContent=document.querySelector("<div/>").classList.add("counter-value-mask").appendTo(neu).text(v);
        
        w=neuContent.width();
        neu.data("w",w);
        neu.css({
            width:w
        })

        w+=padding;
        TweenMax.from(neu,t,{delay:d2,x:-w});
        TweenMax.from(neuContent,t,{delay:d2,x:w-offset});
    }
})();
