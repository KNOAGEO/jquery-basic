$(function(){
    /*
    const title = $('#title').text();
    const list = $('.message').text();
    console.log(title);
    console.log(list);
    */
   // class属性値の先頭が「sample」の要素だけ抽出する
   const text = $('li[class^="sample"]').text();
   console.log(text);
});
