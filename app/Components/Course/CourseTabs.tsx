"use client";

import { useState, type ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

const CourseTabs = ({
  tabs,
  defaultTab,
}: {
  tabs: Tab[];
  defaultTab?: string;
}) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0].id);

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-4">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={`h-[42px] cursor-pointer rounded-full px-4 text-[16px] transition ${
                isActive
                  ? "bg-[#D6FF1F] text-[#111]"
                  : "bg-[#F3F3F3] text-[#222] hover:bg-[#E9E9E9]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-[37px]">
        {tabs.find((tab) => tab.id === active)?.content}
      </div>
    </div>
  );
};

export default CourseTabs;
