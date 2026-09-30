import { useState } from 'react';
import './Sidebar.css'

const sections = [
    {
        name: "Home",
        children: [
            ["Home", "/"]
        ]
    },
    {
        name: "Convex Hull Algorithms",
        children: [
            ["Graham scan", "graham-scan"],
            ["Monotone chain", "monotone-chain"],
        ]
    },
];

function Sidebar() {
    const [openSection, setOpenSection] = useState(null);

    return (
        <aside className="sidebar">
            <h2>Computational Geometry<br />Visualizer</h2>

            <nav>
                {sections.map((section) => (
                    <div key={section.name}>
                        <button className="nav-section" onClick={() => {
                                if (section.children.length > 0) {
                                    setOpenSection(
                                        openSection === section.name
                                            ? null
                                            : section.name
                                    );
                                }
                            }}>
                            <span>{section.name}</span>

                            {section.children.length > 0 && (
                                <span className="arrow">
                                    {openSection === section.name ? "⌄" : "›"}
                                </span>
                            )}
                        </button>

                        {openSection === section.name && (
                            <div className="submenu">
                                {section.children.map((obj) => (
                                    <a key={obj[0]} href={obj[1]}>
                                        {obj[0]}
                                    </a>
                                    )) 
                                }
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar