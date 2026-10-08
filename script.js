const APP_TITLE = "Meet 2";
document.title = APP_TITLE;

// Meet 2 — P4 Data / Visualization
// Roadmap rendering is driven only by the current roadmap_output schema.
// The demo payload below is copied from roadmap_output.sample.json.

const SAMPLE_ROADMAP = {
    "destination": "AI/ML Engineer",
    "paths": [
        {
            "path_id": "PATH_A",
            "title": "B.Tech Engineering Path",
            "education": {
                "degree": "B.Tech",
                "branch": "Computer Science"
            },
            "timeline": "4 Years",
            "why_it_fits": "Structured academic environment providing foundational theory; compare total cost per institution against the student's stated budget preference.",
            "tradeoffs": [
                "Curriculum may delay specialized ML topics to later years.",
                "Requires juggling heavy engineering coursework with self-directed project development."
            ],
            "milestones": [
                {
                    "phase": "Current Commitment",
                    "timeframe": "Until JEE preparation ends; date not stated in the profile",
                    "focus": "Maintain basic coding practice within the 5-10 hours/week limit.",
                    "skills": [
                        "Basic Python syntax"
                    ],
                    "projects": [
                        "Simple algorithmic problem solutions"
                    ]
                },
                {
                    "phase": "Transition after JEE",
                    "timeframe": "Post-JEE until academic commencement",
                    "focus": "Transition to intensive software engineering foundations.",
                    "skills": [
                        "Data structures",
                        "Object-oriented programming"
                    ],
                    "projects": [
                        "Version-controlled coding repository setup"
                    ]
                },
                {
                    "phase": "Academic Foundations",
                    "timeframe": "Degree Year 1",
                    "focus": "Mathematics and core programming proficiency.",
                    "skills": [
                        "Linear algebra implementation",
                        "SQL querying"
                    ],
                    "projects": [
                        "Relational database design for a local dataset"
                    ]
                },
                {
                    "phase": "Applied ML Projects",
                    "timeframe": "Degree Year 2",
                    "focus": "Classical ML algorithms and evaluation metrics.",
                    "skills": [
                        "Pandas data cleaning",
                        "Scikit-learn classification",
                        "Train/test split evaluation"
                    ],
                    "projects": [
                        "Predictive model for classification of public survey data"
                    ]
                },
                {
                    "phase": "Relevant Experience",
                    "timeframe": "Degree Year 3",
                    "focus": "Internship and real-world system exposure.",
                    "skills": [
                        "API integration",
                        "Git workflows"
                    ],
                    "projects": [
                        "Contributed code to an internship project involving data pipelines"
                    ]
                },
                {
                    "phase": "Target Role Preparation",
                    "timeframe": "Degree Year 4",
                    "focus": "Production-oriented engineering and portfolio refinement.",
                    "skills": [
                        "Model serving with FastAPI",
                        "Containerization with Docker",
                        "Automated model testing"
                    ],
                    "projects": [
                        "End-to-end ML service with automated unit tests and containerized deployment"
                    ]
                }
            ],
            "internship_strategy": {
                "readiness": "Student can clean raw data, train a scikit-learn model, and demonstrate performance with precision and recall metrics.",
                "target_roles": [
                    "Data Analyst Intern",
                    "Python Developer Intern"
                ],
                "preparation": [
                    "Build a portfolio of three distinct, documented ML experiments on GitHub"
                ],
                "application_stage": "Begin applying once the student can independently explain the bias-variance tradeoff and demonstrate a project using Scikit-Learn; this may occur around Year 2 depending on progress."
            }
        },
        {
            "path_id": "PATH_B",
            "title": "B.Sc Mathematics Track",
            "education": {
                "degree": "B.Sc",
                "branch": "Mathematics"
            },
            "timeline": "3 Years",
            "why_it_fits": "Stronger mathematical focus allowing faster progression into theoretical ML; compare total cost per institution against the student's stated budget preference.",
            "tradeoffs": [
                "Lacks integrated software engineering training found in B.Tech.",
                "Requires significant independent effort to learn industry-standard production tools."
            ],
            "milestones": [
                {
                    "phase": "Current Commitment",
                    "timeframe": "Until JEE preparation ends; date not stated in the profile",
                    "focus": "Consistent coding habit maintenance.",
                    "skills": [
                        "Python logic"
                    ],
                    "projects": [
                        "Mathematical problem automation in Python"
                    ]
                },
                {
                    "phase": "Transition after JEE",
                    "timeframe": "Post-JEE until academic commencement",
                    "focus": "Bridge mathematical concepts to data handling.",
                    "skills": [
                        "Numerical computation",
                        "Probability basics"
                    ],
                    "projects": [
                        "Statistical simulation scripts"
                    ]
                },
                {
                    "phase": "Theoretical & Algorithmic Foundations",
                    "timeframe": "Degree Year 1",
                    "focus": "Deep mathematical understanding of machine learning foundations.",
                    "skills": [
                        "Calculus",
                        "Probability theory",
                        "NumPy implementation of math algorithms"
                    ],
                    "projects": [
                        "Implemented linear regression from scratch using matrix algebra"
                    ]
                },
                {
                    "phase": "Internship Readiness & Experience",
                    "timeframe": "Degree Year 2",
                    "focus": "Applying theory to complex datasets.",
                    "skills": [
                        "Statistical modeling",
                        "Data visualization",
                        "Scikit-learn tree-based models"
                    ],
                    "projects": [
                        "Analysis of high-dimensional datasets using unsupervised learning techniques"
                    ]
                },
                {
                    "phase": "Relevant Experience",
                    "timeframe": "Degree Year 2-3",
                    "focus": "Building robust data systems in internships.",
                    "skills": [
                        "SQL data extraction",
                        "Model evaluation in production environments"
                    ],
                    "projects": [
                        "Refactored internship code for performance and reproducibility"
                    ]
                },
                {
                    "phase": "Target Role Preparation",
                    "timeframe": "Degree Year 3",
                    "focus": "System design and production ML pipelines.",
                    "skills": [
                        "REST API development",
                        "Pipeline orchestration",
                        "Model performance monitoring"
                    ],
                    "projects": [
                        "Comprehensive portfolio of production-ready models with automated evaluation workflows"
                    ]
                }
            ],
            "internship_strategy": {
                "readiness": "Student can implement classic ML algorithms from scratch using only numerical libraries and evaluate them against library implementations.",
                "target_roles": [
                    "Research Intern",
                    "Data Science Intern"
                ],
                "preparation": [
                    "Write detailed documentation for mathematical implementations of ML algorithms"
                ],
                "application_stage": "Begin applying once the student can demonstrate custom implementation of core ML algorithms and a successful data project; this may occur around Year 2 depending on progress."
            }
        }
    ]
};

const DEMO_ACTIVITY = [
    1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 1, 1
];

let currentRoadmap = null;
let selectedPathId = null;
let selectedPath = null;

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function listHTML(items, className = "") {
    if (!Array.isArray(items) || items.length === 0) {
        return '<p class="empty-state">No items provided.</p>';
    }

    return `<ul class="${className}">` +
        items.map(item => `<li>${escapeHTML(item)}</li>`).join("") +
        "</ul>";
}

function chipListHTML(items, chipClass) {
    if (!Array.isArray(items) || items.length === 0) {
        return '<span class="empty-state">No items provided.</span>';
    }

    return items
        .map(item => `<span class="${chipClass}">${escapeHTML(item)}</span>`)
        .join("");
}

function validateRoadmapShape(roadmap) {
    if (!roadmap || typeof roadmap !== "object") {
        throw new Error("Roadmap output must be an object.");
    }

    if (typeof roadmap.destination !== "string" || !roadmap.destination.trim()) {
        throw new Error("Roadmap output is missing destination.");
    }

    if (!Array.isArray(roadmap.paths) || roadmap.paths.length < 2 || roadmap.paths.length > 3) {
        throw new Error("Roadmap output must contain 2 or 3 paths.");
    }

    roadmap.paths.forEach((path, index) => {
        const required = [
            "path_id",
            "title",
            "education",
            "timeline",
            "why_it_fits",
            "tradeoffs",
            "milestones",
            "internship_strategy"
        ];

        required.forEach(field => {
            if (!(field in path)) {
                throw new Error(`Path ${index + 1} is missing ${field}.`);
            }
        });

        if (!path.education || typeof path.education !== "object") {
            throw new Error(`Path ${index + 1} has invalid education.`);
        }

        if (!Array.isArray(path.milestones) || path.milestones.length < 1) {
            throw new Error(`Path ${index + 1} must contain at least one milestone.`);
        }

        path.milestones.forEach((milestone, milestoneIndex) => {
            [
                "phase",
                "timeframe",
                "focus",
                "skills",
                "projects"
            ].forEach(field => {
                if (!(field in milestone)) {
                    throw new Error(
                        `Path ${index + 1}, milestone ${milestoneIndex + 1} is missing ${field}.`
                    );
                }
            });
        });
    });
}

function selectPath(pathId) {
    if (!currentRoadmap || !Array.isArray(currentRoadmap.paths)) {
        throw new Error("No roadmap is available for path selection.");
    }

    const path = currentRoadmap.paths.find(item => item.path_id === pathId);

    if (!path) {
        throw new Error("Path not found for path_id: " + pathId);
    }

    selectedPathId = path.path_id;
    selectedPath = path;

    // Keep the selected route available to the host application.
    window.Meet2P4.selectedPathId = selectedPathId;
    window.Meet2P4.selectedPath = selectedPath;

    // Persist the actual backend path_id and full selected path.
    try {
        sessionStorage.setItem("meet2:selectedPathId", selectedPathId);
        sessionStorage.setItem("meet2:selectedPath", JSON.stringify(path));
    } catch (error) {
        console.warn("Could not persist selected path in sessionStorage.", error);
    }

    // Update the rendered buttons so the selected route is visible.
    document.querySelectorAll(".select-route-button").forEach(button => {
        const isSelected = button.dataset.pathId === selectedPathId;
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });

    const detail = {
        pathId: path.path_id,
        path
    };

    // Notify the host application that a path was selected.
    window.dispatchEvent(
        new CustomEvent("meet2:path-selected", { detail })
    );

    // Preferred integration hook: host can open its real Interactive Roadmap UI.
    if (typeof window.openInteractiveRoadmap === "function") {
        window.openInteractiveRoadmap(path);
    } else {
        // Fallback event: host application can listen and perform the navigation.
        window.dispatchEvent(
            new CustomEvent("meet2:open-interactive-roadmap", { detail })
        );
    }

    return path;
}

function renderPath(path, index) {
    const milestonesHTML = path.milestones.map(milestone => `
        <article class="milestone">
            <div class="milestone-dot" aria-hidden="true"></div>
            <div class="milestone-content">
                <div class="milestone-meta">
                    <span class="phase-chip">${escapeHTML(milestone.phase)}</span>
                    <span class="timeframe-chip">${escapeHTML(milestone.timeframe)}</span>
                </div>

                <h3>${escapeHTML(milestone.focus)}</h3>

                <div class="skill-list">
                    ${chipListHTML(milestone.skills, "skill-chip")}
                </div>

                <p class="projects-title">Projects</p>
                ${listHTML(milestone.projects)}
            </div>
        </article>
    `).join("");

    return `
        <article class="path-card">
            <div class="path-main">
                <span class="path-index">${escapeHTML(path.path_id)}</span>
                <h3 class="path-title">${escapeHTML(path.title)}</h3>

                <div class="info-grid">
                    <div class="info-card">
                        <h3>Education</h3>
                        <p class="education-line">
                            <strong>${escapeHTML(path.education.degree)}</strong>
                            · ${escapeHTML(path.education.branch)}
                        </p>
                    </div>

                    <div class="info-card">
                        <h3>Timeline</h3>
                        <p class="timeline-value">${escapeHTML(path.timeline)}</p>
                    </div>

                    <div class="info-card">
                        <h3>Why it fits</h3>
                        <p class="fit-text">${escapeHTML(path.why_it_fits)}</p>
                    </div>

                    <div class="info-card tradeoff-card">
                        <h3>Trade-offs</h3>
                        ${listHTML(path.tradeoffs)}
                    </div>
                </div>
            </div>

            <div class="journey-block">
                <div class="journey-header">
                    <h3>Milestones</h3>
                    <span class="milestone-count">
                        ${path.milestones.length} milestone${path.milestones.length === 1 ? "" : "s"}
                    </span>
                </div>

                <div class="milestones">
                    ${milestonesHTML}
                </div>
            </div>

            <div class="internship-wrap">
                <section class="internship-card">
                    <h3>Internship Strategy</h3>

                    <p>
                        <strong>Readiness:</strong>
                        ${escapeHTML(path.internship_strategy.readiness)}
                    </p>

                    <p class="roles-title">Target Roles</p>
                    <div class="role-list">
                        ${chipListHTML(path.internship_strategy.target_roles, "role-chip")}
                    </div>

                    <p class="prep-title">Preparation</p>
                    ${listHTML(path.internship_strategy.preparation)}

                    <p>
                        <strong>Application Stage:</strong>
                        ${escapeHTML(path.internship_strategy.application_stage)}
                    </p>
                </section>
            </div>

            <div class="route-action">
                <button
                    type="button"
                    class="select-route-button"
                    data-path-id="${escapeHTML(path.path_id)}"
                    aria-label="Explore and select ${escapeHTML(path.title)}"
                    aria-pressed="false"
                >
                    Explore &amp; Select This Route
                </button>
            </div>
        </article>
    `;
}

function renderAnalytics(roadmap) {
    const routeMetrics = roadmap.paths.map(path => ({
        label: path.path_id,
        milestones: path.milestones.length,
        projects: path.milestones.reduce((sum, m) => sum + m.projects.length, 0),
        skills: path.milestones.reduce((sum, m) => sum + m.skills.length, 0)
    }));

    const maxMilestones = Math.max(...routeMetrics.map(item => item.milestones), 1);

    const milestoneBars = routeMetrics.map(item => `
        <div class="metric-row">
            <span class="metric-name">${escapeHTML(item.label)}</span>
            <div class="metric-track">
                <div class="metric-fill" style="width: ${(item.milestones / maxMilestones) * 100}%"></div>
            </div>
            <span class="metric-value">${item.milestones}</span>
        </div>
    `).join("");

    const skillCounts = {};
    roadmap.paths.forEach(path => {
        path.milestones.forEach(milestone => {
            milestone.skills.forEach(skill => {
                skillCounts[skill] = (skillCounts[skill] || 0) + 1;
            });
        });
    });

    const skillsSorted = Object.entries(skillCounts)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 8);

    const maxSkillCount = Math.max(...skillsSorted.map(item => item[1]), 1);

    const skillRows = skillsSorted.length
        ? skillsSorted.map(([skill, count]) => `
            <div class="skill-frequency-row">
                <span class="metric-name">${escapeHTML(skill)}</span>
                <div class="skill-frequency-track">
                    <div class="skill-frequency-fill" style="width: ${(count / maxSkillCount) * 100}%"></div>
                </div>
                <span class="metric-value">${count}</span>
            </div>
        `).join("")
        : '<p class="empty-state">No milestone skills provided.</p>';

    document.getElementById("analytics").innerHTML = `
        <div class="analytics-grid">
            <div class="analytics-card">
                <h3>Milestones by Route</h3>
                <p class="section-subtitle">
                    Number of milestone stages contained in each route.
                </p>
                <div class="analytics-bars">
                    ${milestoneBars}
                </div>
            </div>

            <div class="analytics-card">
                <h3>Skill Focus Frequency</h3>
                <p class="section-subtitle">
                    How often skills appear across milestone stages.
                </p>
                <div class="skill-frequency">
                    ${skillRows}
                </div>
            </div>
        </div>
    `;
}

function renderStreak(activity) {
    const grid = document.getElementById("streakGrid");
    grid.innerHTML = "";

    let days = [];

    // Existing P4 demo format:
    // [1, 0, 1, 1, ...]
    if (Array.isArray(activity)) {
        days = activity.map((value, index) => ({
            date: `Day ${index + 1}`,
            count: Number(value) || 0
        }));
    }

    // Real backend /api/progress format:
    // { "2026-10-01": 2, "2026-10-02": 1, ... }
    else if (activity && typeof activity === "object") {
        activity = activity.activity || activity;

        const entries = Object.entries(activity)
            .sort(([dateA], [dateB]) => dateA.localeCompare(dateB));

        if (entries.length > 0) {
            const startDate = new Date(`${entries[0][0]}T00:00:00Z`);
            const endDate = new Date(`${entries[entries.length - 1][0]}T00:00:00Z`);

            const activityMap = Object.fromEntries(
                entries.map(([date, count]) => [
                    date,
                    Number(count) || 0
                ])
            );

            for (
                let current = new Date(startDate);
                current <= endDate;
                current.setUTCDate(current.getUTCDate() + 1)
            ) {
                const date = current.toISOString().slice(0, 10);

                days.push({
                    date,
                    count: activityMap[date] || 0
                });
            }
        }
    }

    if (days.length === 0) {
        document.getElementById("streakCount").textContent = "0 days";
        grid.innerHTML = '<p class="empty-state">No activity data yet.</p>';
        return;
    }

    // Count consecutive active days from the latest day backward.
    let streak = 0;

    for (let i = days.length - 1; i >= 0; i -= 1) {
        if (days[i].count > 0) {
            streak += 1;
        } else {
            break;
        }
    }

    days.forEach((day) => {
        const cell = document.createElement("div");
        const active = day.count > 0;

        cell.className = "streak-day" + (active ? " active" : "");

        cell.title = active
            ? `${day.date}: ${day.count} activit${day.count === 1 ? "y" : "ies"}`
            : `${day.date}: No activity`;

        grid.appendChild(cell);
    });

    document.getElementById("streakCount").textContent =
        `${streak} day${streak === 1 ? "" : "s"}`;
}

function renderRoadmap(roadmap) {
    validateRoadmapShape(roadmap);

    currentRoadmap = roadmap;

    document.getElementById("destination").textContent = roadmap.destination;

    document.getElementById("routeIntro").textContent =
        "We found " +
        roadmap.paths.length +
        " distinct route" +
        (roadmap.paths.length === 1 ? "" : "s") +
        " toward the same destination.";

    const pathsContainer = document.getElementById("paths");

    pathsContainer.innerHTML =
        roadmap.paths.map(renderPath).join("");

    // IMPORTANT:
    // Buttons are created dynamically by renderPath(), so handlers must be
    // attached after the HTML has been rendered.
    pathsContainer.querySelectorAll(".select-route-button").forEach(button => {
        button.addEventListener("click", () => {
            selectPath(button.dataset.pathId);
        });
    });

    renderAnalytics(roadmap);
}

try {
    renderRoadmap(SAMPLE_ROADMAP);
    renderStreak(DEMO_ACTIVITY);
} catch (error) {
    console.error(error);

    document.getElementById("paths").innerHTML = `
        <div class="info-card">
            <h3>Roadmap could not be rendered</h3>
            <p>${escapeHTML(error.message)}</p>
        </div>
    `;
}

// Backend integration point:
// After the backend returns the validated roadmap JSON, call:
// renderRoadmap(backendRoadmapObject);
//
// Generated route flow:
// backend paths[]
//     -> renderPath(path)
//     -> button[data-path-id=path.path_id]
//     -> selectPath(path_id)
//     -> store selected path
//     -> open Interactive Roadmap through:
//          window.openInteractiveRoadmap(path)
//        OR:
//          "meet2:open-interactive-roadmap" event
//
// No hardcoded route names are used.
// No new fields are required in roadmap_output for the roadmap UI.

window.Meet2P4 = {
    renderRoadmap,
    renderStreak,
    selectPath,
    get selectedPathId() {
        return selectedPathId;
    },
    get selectedPath() {
        return selectedPath;
    }
};
