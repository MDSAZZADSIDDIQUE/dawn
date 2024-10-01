import React from "react";

const Sidebar = () => {
  return (
    <ul className="menu bg-base-200 rounded-box w-56 min-h-screen">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
};

export default Sidebar;
