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
        ]
    },
];

function Sidebar() {
    const [openSection, setOpenSection] = useState(null);
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }


    return (
        <div className={`sidebar-container${toggle ? ' is-open' : ''}`}>
            { toggle && (
            <aside className="sidebar">
                <div>
                    <div className="sidebar-header">
                        <h2>Computational Geometry<br />Visualizer</h2>
                    </div>
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
                </div>
            </aside>
            )}
            <button className="sidebar-toggle" type="button" aria-label="Toggle sidebar" title="Toggle sidebar" onClick={handleClick}>
                <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" focusable="false">
                    <metadata>
                        Font Awesome Free 6.7.2 bars icon by Fonticons, Inc. Copyright 2024.
                        https://fontawesome.com — CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).
                        Source: https://github.com/FortAwesome/Font-Awesome/blob/6.7.2/svgs/solid/bars.svg.
                        SVG path unchanged; presentation and accessibility attributes adapted for React.
                    </metadata>
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
        </div>
    );
}

export default Sidebar
