import React from "react";
import styles from "./GNB.module.scss";
import { serviceList } from '@zmon/shared/menu';

export default function GNB() {
  return (
    <header className={styles.gnb}>
      <img
        src="https://mon.cloudz.co.kr/alert-manager/styles/img/brand/zmon-logo.png"
        alt="zmon_logo"
      />
      <div>
        {serviceList.map(service =>
          <a key={service.id} href={service.url}>{service.name}</a>)
        }
      </div>
    </header>
  );
}
