;
var _log=function(x){
    console.log(x);
};
(function(){
    var m=function(s){
        if(!s){
            this.es=document;
        }else{
            this.es=document.querySelectorAll(s);
        }


    }
    m.prototype.count=function(){
        return this.es.length;
    }
    m.prototype.attr=function(n,v){
        if(!n){

        }else{
            if(!v){
                //get
            }else{
                for(var i=0;i<this.es.length;i++){
                    this.es[i].setAttribute(n,v);
                }
            }
        }
        return this;
    }
    m.prototype.select=function(s){

        if(!s){
        }else{
            var new_es=new Array();
            for(var i=0;i<this.es.length;i++){
                if(s.indexOf("#")!=-1){
                    var name= s.split("#")[1];
                    if(this.es[i].id===name){
                        new_es.push(this.es[i]);
                    }else{

                    }
                }
                if(s.indexOf(".")!=-1){
                    var name= s.split(".")[1];
                    if(this.es[i].className.indexOf(name)!=-1){
                        new_es.push(this.es[i]);
                    }else{

                    }
                }
            }
            this.es=new_es;
        }
        return this;
    }
    m.prototype.not=function(s){
        if(!s){
        }else{
            var new_es=new Array();

            for(var i=0;i<this.es.length;i++){

                if(s.indexOf("#")!=-1){
                    var name= s.split("#")[1];
                    if(this.es[i].id===name){

                    }else{
                        new_es.push(this.es[i]);
                    }
                }
                if(s.indexOf(".")!=-1){
                    var name= s.split(".")[1];
                    if(this.es[i].className.indexOf(name)!=-1){
                    }else{
                        new_es.push(this.es[i]);
                    }
                }
            }
            this.es=new_es;
        }
        return this;
    }




    _=function(s){
        return new m(s);
    }
})();