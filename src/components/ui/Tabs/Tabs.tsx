"use client";

import { useState } from "react";
import styles from "./Tabs.module.css";

type TabsItem = {
  id: string;
  label: string;
};

type Props = {
  items: TabsItem[];
};

export default function Tabs({ items }: Props) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabList} role="tablist">
        {items.map((item) => (
          <li className={styles.tabItem} key={item.id}>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === item.id}
              className={activeTab === item.id ? styles.active : ""}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
