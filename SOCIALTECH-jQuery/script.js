$(function() {
    // ボタンアニメーション
    $('.button-more').on('mouseover', function(){
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        }, 100);
    });

$('.button-more').on('mouseout', function(){
    $(this).animate({
        opacity: 1.0,
        marginLeft: 0
    }, 100);
});

// カルーセル
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
});

// AjaxでSTATIC FORMSにデータを送信
$('#submit').on('click', (event)=>{
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();
});
// フォーカスが外れた時（blur)にフォームの入力チェックをする
    $('#name').blur(()=>{
        inputCheck();
    });

    $('furigana').blur(()=>{
        inputCheck();
    });

    $('#email').blur(()=>{
        inputCheck();
    });

    $('#tel').blur(()=>{
        inputCheck();
    });

    $('#message').blur(()=>{
        inputCheck();
    });

    $('#agree').click(()=>{
        inputCheck();
    });

// お問い合わせフォームの入力チェック
inputCheck (()=> {
    console.log('inputCheck関数の呼び出し');
});

});