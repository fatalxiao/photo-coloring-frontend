/**
 * 初始化
 */
function init() {
    initTakeASelfieButton();
    initUploadPhotoButton();
    initImageInput();
    initResultImg();
}

/**
 * 初始化 Take A Selfie 按钮
 */
function initTakeASelfieButton() {
    $('#take-a-selfie-button').click(function () {
        selectImage();
    });
}

/**
 * 初始化 Upload Photo 按钮
 */
function initUploadPhotoButton() {
    $('#upload-photo').click(function () {
        selectImage();
    });
}

/**
 * 选择图片
 */
function selectImage() {
    const imageInput = $('#image-select-input');
    imageInput && imageInput[0] && imageInput[0].click();
}

/**
 * 初始化 Upload Photo 按钮
 */
function initImageInput() {
    $('#image-select-input').change(function (e) {

        if (!e) {
            return;
        }

        $('#img-selfie').attr('src', URL.createObjectURL(e.target.files[0]));
        $('#result .err-msg').hide();
        $('#img-result').addClass('invisible');
        $('#result .loading-wrapper').show();
        getColoringImg();
        scrollToResultCard();

    });
}

/**
 * 初始化结果图片，加载成功后隐藏 loading
 */
function initResultImg() {
    $('#img-result').on('load', function () {
        $('#result .loading-wrapper').hide();
        $(this).removeClass('invisible');
    });
}

/**
 * 滚动到 result card
 */
function scrollToResultCard() {

    const resultCard = $('#result').show(),
        loadingWrapper = $('#result .loading-wrapper');

    loadingWrapper.height(loadingWrapper.width());

    $('html, body').stop().animate({
        scrollTop: resultCard.offset().top
    }, 250);

}

/**
 * 调用接口
 */
function getColoringImg() {
    $.ajax({
        type: 'POST',
        url: 'http://api.laojiu.ink/api/img/color/upload_and_color',
        data: new FormData($('#image-select-form')[0]),
        processData: false,
        contentType: false,
        dataType: 'json',
        success: getColoringImgSuccess,
        error: getColoringImgFailure
    });
}

/**
 * 调用接口成功
 * @param data
 * @param textStatus
 */
function getColoringImgSuccess(data) {

    if (!data || data.status_code !== 200 || !data.img_url) {
        return getColoringImgFailure(data);
    }

    $('#img-result').attr('src', data.img_url);

}

/**
 * 调用接口失败
 * @param data
 * @param textStatus
 */
function getColoringImgFailure(data) {
    $('#result .err-msg').show();
}

$(function () {
    init();
});
