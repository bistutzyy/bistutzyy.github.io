/* 3D 银行卡翻转 - DOM 结构转换 */
(function () {
  function initCopyrightCards() {
    var copyrights = document.querySelectorAll('.post-copyright');
    if (!copyrights.length) return;

    copyrights.forEach(function (el) {
      if (el.classList.contains('card-ready')) return;
      el.classList.add('card-ready');

      var authorEl = el.querySelector('.post-copyright__author');
      var typeEl = el.querySelector('.post-copyright__type');
      var noticeEl = el.querySelector('.post-copyright__notice');

      var originalHTML = '';
      [authorEl, typeEl, noticeEl].forEach(function (item) {
        if (item) {
          item.classList.add('card-info-row');
          originalHTML += item.outerHTML;
        }
      });

      var articleLink = '';
      if (typeEl) {
        var link = typeEl.querySelector('a');
        if (link) articleLink = link.href;
      }

      var cardInner = document.createElement('div');
      cardInner.className = 'card-inner';

      var cardFront = document.createElement('div');
      cardFront.className = 'card-front';
      cardFront.innerHTML =
        '<div class="card-chip"></div>' +
        originalHTML +
        '<div class="card-brand">PLATINUM</div>';

      var siteUrl = 'https://bistutzyy.github.io';
      var cardBack = document.createElement('div');
      cardBack.className = 'card-back';
      cardBack.innerHTML =
        '<div class="card-back-text">' +
        '转载请联系作者获得授权<br>' +
        '转载请注明来源<br>' +
        '<a href="' + (articleLink || siteUrl) + '">桃之夭夭</a>' +
        '</div>';

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      el.innerHTML = '';
      el.appendChild(cardInner);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyrightCards);
  } else {
    initCopyrightCards();
  }

  document.addEventListener('pjax:complete', initCopyrightCards);
})();
