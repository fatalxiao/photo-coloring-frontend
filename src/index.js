/**
 * 初始化
 */
function init() {
    initTakeASelfieButton();
    initUploadPhotoButton();
    initImageInput();
}

/**
 * 初始化 Take A Selfie 按钮
 */
function initTakeASelfieButton() {
    const takeASelfieButton = $('#take-a-selfie-button');
    takeASelfieButton.click(function () {
        selectImage();
        // getColoringImg();
    });
}

/**
 * 初始化 Upload Photo 按钮
 */
function initUploadPhotoButton() {
    const uploadPhotoButton = $('#upload-photo');
    uploadPhotoButton.click(function () {
        selectImage();
        // scrollToResultCard();
        // getColoringImg();
    });
}

/**
 * 选择图片
 */
function selectImage() {
    const imageInput = $('#image-select-input');
    imageInput[0].click();
}

/**
 * 初始化 Upload Photo 按钮
 */
function initImageInput() {
    const imageInput = $('#image-select-input');
    imageInput.change(function (e) {

        if (!e) {
            return;
        }

        $('#img-selfie').attr('src', URL.createObjectURL(e.target.files[0]));
        scrollToResultCard();
        getColoringImg();

    });
}

/**
 * 滚动到 result card
 */
function scrollToResultCard() {
    const resultCard = $('#result').show();
    $('html, body').stop().animate({
        scrollTop: resultCard.offset().top
    }, 250);
}

function getColoringImg() {
    $.ajax({
        type: 'POST',
        // url: 'http://api.laojiu.ink/api/img/color/upload_and_color',
        url: 'http://100.81.2.252:8001/api/img/color/upload_and_color',
        data: new FormData($('#image-select-form')[0]),
        processData: false,
        contentType: 'multipart/form-data; charset=UTF-8',
        dataType: 'json',
        success: function (data, textStatus) {

        },
        error: function (data, textStatus) {

        }
    });
}

$(function () {
    init();
});
