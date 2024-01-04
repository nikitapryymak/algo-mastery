import { useState } from "react";

export const Tab = ({ title, children }) => {
  if (!title || !children)
    throw new Error("Tab is missing props: title, children");
  return null;
};

const ACTIVE_STYLES = "bg-pink-300 text-slate-900 hover:bg-pink-300";

const Tabs = ({ defaultIndex, containerStyles = {}, children }) => {
  const tabTitles = children.map((child) =>
    child?.type === Tab ? child.props.title : null
  );

  const [tabIndex, setTabIndex] = useState(defaultIndex || 0);

  return (
    <div className="bg-[#191e24] p-4 rounded-xl" style={containerStyles}>
      <div className="flex gap-1 mb-4">
        {tabTitles.map((title, i) => (
          <button
            onClick={() => setTabIndex(i)}
            className={`py-1 px-4 text-sm rounded-lg ${
              i === tabIndex ? ACTIVE_STYLES : "hover:bg-hover-gray"
            }`}
            key={i}
          >
            {title}
          </button>
        ))}
      </div>

      <div>{children[tabIndex].props.children}</div>
    </div>
  );
};
export default Tabs;
