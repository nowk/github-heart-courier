/*
 * current style
 *
 *    tt, code, pre {
 *      font-family: Consolas, "Liberation Mono", Monaco, Courier, monospace;
 *    }
 */

window.addEventListener("load", function() {
  // handle pjax
  var time;
  var pjaxele = document.getElementById('js-repo-pjax-container');

  if (pjaxele) {
    // TODO find better way to handle DOMSubtreeModified
    // https://developer.mozilla.org/en-US/docs/Web/Reference/Events
    pjaxele.addEventListener('DOMSubtreeModified', function() {
      if (time) {
        clearTimeout(time);
      }

      // this will always execute twice, due to 2 events. can offset but unsure what the
      // exact offset would be, seems like 2 though
      time = setTimeout(function() {
        revertToCourier(document);
        time = null;
      }, 10);
    });
  }

  // regular page loads
  revertToCourier(document);
}, true);

/*
 * revert to courier
 *
 * @param {Document} document
 */

function revertToCourier(document) {
  if (!document) {
    return;
  }

  setFontFamily(document.querySelectorAll('.blob-line-code'));
  setFontFamily(document.querySelectorAll('.diff-line-code'));
  setFontFamily(document.querySelectorAll('.blob-line-num'));

  // gist
  setFontFamily(document.querySelectorAll('.line-data'));
  setFontFamily(document.querySelectorAll('.file-data pre'));
  setFontFamily(document.querySelectorAll('.file-data .line-numbers'));
}

/*
 * set font-family for element
 */

function setFontFamily(ele) {
  if (!ele) {
    return;
  }

  var i = 0;
  var len = ele.length;
  for(; i < len; i++) {
    var e = ele[i];
    e.style['font-family'] = 'Courier, Monaco, monospace';
  }
}

