const serviceList = [
  { id: 1, name: 'Grafana', url: 'https://mon.cloudz.co.kr' },
  { id: 2, name: 'ZMC', url: 'https://mon.cloudz.co.kr/alert-manager' }
];

export const getGNB = (gnbEl) => {
  // const gnbEl = document.getElementById("gnb");
  // console.log(gnbEl);
  if (gnbEl) {
    for (let i = 0; i < serviceList.length; i++) {
      const service = serviceList[i];
      const menuItem = document.createElement("a");
      menuItem.href = service.url;
      menuItem.target = "_self";
      const text = document.createTextNode(service.name);
      menuItem.appendChild(text);
      gnbEl.appendChild(menuItem);
    }
  }
};
