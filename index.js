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

  setFontFamily(document.querySelector('.blob-line-code pre'));
  setFontFamily(document.querySelector('.blob-line-nums'));
}

/*
 * set font-family for element
 */

function setFontFamily(ele) {
  if (!ele) {
    return;
  }

  ele.style['font-family'] = 'Consolas, "Liberation Mono", Courier, Monaco, monospace';
}

