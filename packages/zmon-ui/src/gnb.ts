import { serviceList } from '@zmon/shared/menu'

export const getGNB = (gnbEl: any) => {
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
