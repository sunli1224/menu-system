$(function () {
   $.post("/question/", {"mode": 1},function (data) {
       var datas = JSON.parse(data);
       for(var i=0;i <= datas["lengths"]-1 ;i++){
           var txt1 = $("<tr class='active'></tr>");
           txt1.attr('id',"p" + i.toString() );
           txt1.appendTo($("tbody"));
           var txt3 = $("<td></td>");
           txt3.appendTo(txt1);
           for(var t = 0; t< 4; t++)
           {
               var txt2 = $("<td></td>").text(datas["data"][i][t].toString());
               txt2.appendTo(txt1);
           }
           var txt5 =  $("<td></td>").text(datas["dp"][i]);
           txt5.appendTo(txt1);
       }
   })
});