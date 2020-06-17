const SERVICES = [
  {
    "id": 1,
    "name": "Grafana",
    "url": "https://mon.cloudz.co.kr"
  },
  {
    "id": 2,
    "name": "ZMC",
    "url": "https://mon.cloudz.co.kr/alert-manager"
  }
];

interface Service {
  id: number;
  name: string;
  url: string;
}

export const serviceList: Array<Service> = SERVICES;
