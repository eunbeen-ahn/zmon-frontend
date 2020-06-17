var serviceList = [{
  id: 1,
  name: 'Grafana',
  url: 'https://mon.cloudz.co.kr'
}, {
  id: 2,
  name: 'ZMC',
  url: 'https://mon.cloudz.co.kr/alert-manager'
}];
var getGNB = function getGNB(gnbEl) {
  // const gnbEl = document.getElementById("gnb");
  // console.log(gnbEl);
  if (gnbEl) {
    for (var i = 0; i < serviceList.length; i++) {
      var service = serviceList[i];
      var menuItem = document.createElement("a");
      menuItem.href = service.url;
      menuItem.target = "_self";
      var text = document.createTextNode(service.name);
      menuItem.appendChild(text);
      gnbEl.appendChild(menuItem);
    }
  }
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "#gnb {\n    float: right;\n    background: red;\n    height: 50px;\n    width: 300px;\n}\n\n#gnb a {\n    font-size: 25px;\n    margin-right: 10px;\n    line-height: 50px;\n}\n";
styleInject(css_248z);

export { getGNB };
