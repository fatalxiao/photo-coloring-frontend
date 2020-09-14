/**
 * @file index.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

// Vendors
import $ from 'jquery';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/index.scss';
import 'scss/Container.scss';
import 'scss/Card.scss';
import 'scss/CircularLoading.scss';

/**
 * 初始化
 */
function init() {
    initTakeASelfieButton();
    initUploadPhotoButton();
}

/**
 * 初始化 Take A Selfie 按钮
 */
function initTakeASelfieButton() {
    const takeASelfieButton = $('#source .btn-success');
    takeASelfieButton.click(() => {
        console.log(111);
    });
}

/**
 * 初始化 Upload Photo 按钮
 */
function initUploadPhotoButton() {
    const uploadPhotoButton = $('#source .btn-info');
    uploadPhotoButton.click(() => {

        scrollToResultCard();

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

$(() => {
    init();
});
