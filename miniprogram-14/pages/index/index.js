// index.js
// 获取应用实例
var a,b,c,sum;
Page({
    principal:function(e){
        a=parseInt(e.detail.value);
},
interestrate:function(e){
     b=parseInt(e.detail.value);
},
calc:function(){
    c = a;
     for(var n=1;n<=5;n++){
        c=c*b/100+c 
      }
      this.setData({
          sum:c 
   }) 
  } 
})