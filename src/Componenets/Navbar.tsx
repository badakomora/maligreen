/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sidebarStyles = css`
  background: #ffffff;
  color: #486c1b;
  width: 250px;
  padding: 1rem;

  nav {
    margin-top: 50px;
  }

  nav a {
    text-decoration: none;
    color: #486c1b;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin:5px;
  }

  nav a:hover,
  nav a.active {
    background: #486c1b;
    color: #ffffff;
  }
`;

interface NavbarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}


export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: "Dashboard" },
    { label: "Sales" },
    { label: "Expenses & Budget" },
    { label: "Livestock & Production" },
    { label: "Payroll" },
  ];
  
  return (
    <div css={sidebarStyles}>
      <img src="/2.png" alt="logo" style={{ width: "100%" }} />
      <nav>
        {tabs.map((tab) => (
          <a
            href="."
            key={tab.label}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab.label);
            }}
            className={activeTab === tab.label ? "active" : ""}
          >
           {tab.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
