import { useState, useEffect } from 'react';
import './App.css';


// Initial Mock Data
const INITIAL_PROJECTS = [
  {
    id: 'FILE_01',
    code: 'CODE_001 // Sightseeing Ideas',
    title: 'Sightseeing Ideas',
    year: '2026',
    description: 'A dynamic user profile route built within the Sightseeing Ideas application, displaying individual user details, saved travel destinations, and custom activity history.',
    image: '/Screenshot 2026-10-29 150050.png',
    tags: ['Supabase'],
    demoUrl: 'https://sightseeing-destination-8a20ylz6o-noma-s-projects.vercel.app/',
    githubUrl: 'https://github.com/nkhoza039-glitch/sightseeing-destination.git'
  },
  {
    id: 'FILE_02',
    code: 'CODE_002 // Picnic & Thrift',
    title: 'Picnic & Thrift',
    year: '2025',
    description: 'An event and lifestyle web platform designed for Picnic & Thrift, featuring dynamic market listings, location spotlights, and interactive community media.',
    image: '/Screenshot 2026-10-29 153105.png',
    tags: ['Design', 'HTML ', 'CSS', 'Javascript'],
    demoUrl: 'https://p-t-tau.vercel.app/'
  },
  {
    id: 'FILE_03',
    code: 'CODE_003 // RENEWABLE ENERGY',
    title: 'INDEPENDENT ELECTRICAL & RENEWABLE ENERGY SERVICES',
    year: '2025',
    description: 'A professional business website for certified electrical and renewable energy services based in Pretoria West, South Africa.',
    image: '/indepenent.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://lovely-flan-2067f2.netlify.app/'
  },
  {
    id: 'FILE_04',
    code: 'CODE_004 // AFTER WORK',
    title: 'PowerGP24/7',
    year: '2026',
    description: 'A professional corporate website designed for a certified electrical contractor, featuring municipal grid services, company metrics, and responsive client contact channels.',
    image: '/power.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://capable-cupcake-772461.netlify.app/'
  },
  {
    id: 'FILE_05',
    code: 'CODE_05 // Skills',
    title: 'Football Club Portfolio',
    year: '2026',
    description: 'A minimalist artist portfolio website showcasing contemporary fine art collections, gallery exhibitions, and client inquiries',
    image: '/soccer.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://serene-sprinkles-8f5f2b.netlify.app/'
  },
  {
    id: 'FILE_06',
    code: 'CODE_06 // Fun project',
    title: 'Kwi Calculator',
    year: '2026',
    description: 'A clean, interactive web calculator built with custom JavaScript logic for executing everyday arithmetic calculations with a responsive UI.',
    image: '/calulater.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://stunning-naiad-e81bd5.netlify.app/',
    githubUrl: 'https://github.com/nkhoza039-glitch/pixel-kawaii-calculator.git'
  },
  {
    id: 'FILE_07',
    code: 'CODE_07// AFTER WORK',
    title: 'CELESTIAL COMMERCE ENGINE',
    year: '2026',
    description: 'A Phineas and Ferb-inspired Tic-Tac-Toe web game featuring custom themed UI graphics, dynamic score tracking, and interactive win-condition logic.',
    image: '/phinnes.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://stellar-biscotti-2f5547-tictac.netlify.app//'
  },
  {
    id: 'FILE_08',
    code: 'CODE_08 // SKILL CHEACK ',
    title: 'ROCK, PAPER, SCISSORS',
    year: '2026',
    description: 'responsive web application bringing the classic Rock, Paper, Scissors game to life with clean front-end styling and dynamic win-condition evaluations..',
    image: '/RockPaper.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://stunning-bombolone-5c7c1a-rock-papper.netlify.app/'
  },
  {
    id: 'FILE_09',
    code: 'CODE_09 // AFTER WORK',
    title: 'NIKE',
    year: '2025',
    description: 'A modern conceptual redesign reimagining the Nike homepage with high-impact visuals, responsive layouts, and clean visual hierarchy.',
    image: '/nike.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://beamish-belekoy-d744cd-nike.netlify.app/',
    githubUrl: 'https://github.com/nkhoza039-glitch/NIKE-Inspired-homepage.git'
  },
  {
    id: 'FILE_10',
    code: 'CODE_004 //SKILLS',
    title: 'DRUMS',
    year: '2026',
    description: 'An interactive web drum machine and beat maker featuring custom pad triggers, real-time beat recording, audio playback, and session saving capabilities.',
    image: '/mixer.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://prismatic-naiad-f54890-drums.netlify.app/',
    githubUrl: '#'
  }
  ,
  {
    id: 'FILE_11',
    code: 'CODE_004 // AFTER WORK',
    title: 'Task Manager',
    year: '2026',
    description: 'An interactive task management web application featuring real-time progress tracking, task completion challenges, and dynamic styling.',
    image: '/Screenshot 2026-10-29 175710.png',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://vocal-griffin-4846c9.netlify.app/'
  }
];

const INITIAL_CERTIFICATES = [
  {
    id: 'CERT_01',
    code: 'fcc-edc04410-ea65-4abf-9df9-ad761b418726-rwdv9',
    title: 'Responsive Web Design Certification',
    issuer: 'FreeCodeCamp',
    date: '2025',
    image: '/responsiv_freecodecamp.png',
    verificationUrl: 'https://www.freecodecamp.org/certification/fcc-edc04410-ea65-4abf-9df9-ad761b418726/responsive-web-design-v9',
    description: 'Covers 300+ hours of hands-on coursework in modern HTML5 and CSS3, focusing on responsive layout design, flexbox, CSS grid, typography, and web accessibility standards'
  },
  {
    id: 'CERT_02',
    code: ' 58f6a050-54ea-429f-a69d-b74251f368fd',
    title: 'GENERATIVE GRAPHICS & WEBGL SPECIALIST',
    issuer: 'Digital Arts Institute',
    date: '2026',
    image: '/hp_data.png',
    verificationUrl: 'https://www.life-global.org/certificate/58f6a050-54ea-429f-a69d-b74251f368fd',
    description: 'By completing this course, the above-named student has learned about some leading data science and analytics practices, methodologies, and tools, examined the benefits and challenges of a data-driven approach for businesses, and gained knowledge about some of the essential skills needed to pursue a career in the field' 
  },
  {
    id: 'CERT_03',
    code: 'fcc-edc04410-ea65-4abf-9df9-ad761b418726-jsv9',
    title: 'Java Script',
    issuer: 'Cloud Systems Alliance',
    date: '2026',
    image: '/javascript.png',
    verificationUrl: 'https://www.freecodecamp.org/certification/fcc-edc04410-ea65-4abf-9df9-ad761b418726/javascript-v9',
    description: 'Demonstrates 300+ hours of coursework covering core JavaScript fundamentals, algorithms, data structures, object-oriented programming, functional programming, DOM manipulation, and asynchronous logic'
  }
  ,
  {
    id: 'CERT_04',
    code: '',
    title: 'AI Skills Fest 2026',
    issuer: 'Microsoft',
    date: '2026',
    image: '/AI_skill.png',
    verificationUrl: 'https://www.credly.com/badges/db0fd0dc-d53c-4db6-b9ba-74116eb4f204/linked_in_profile',
    description: 'Earners demonstrate foundational and applied AI knowledge, including how to use AI tools to enhance productivity, create content, and solve real-world problems. They can identify practical use cases, apply AI responsibly, and continue building skills through guided learning pathways.'
  }
  ,
  {
    id: 'CERT_05',
    code: 'ACCRED_1029_SB',
    title: 'Introduction to Cybersecurity',
    issuer: ' Cisco',
    date: '2026',
    image: '/Cisco.png',
    verificationUrl: 'https://www.credly.com/badges/26e7f816-98b7-433e-93f1-5f420f3ce8ad/linked_in_profile',
    description: 'Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession. They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.'
  }
  ,
  {
    id: 'CERT_06',
    code: ' GM-BEG-0M96WLH',
    title: 'GitMastery Git Fundamentals',
    issuer: 'GitMastery',
    date: '2026',
    image: '/gitmastery-beginner-certificate-nomalanga (1).png',
    verificationUrl: '#',
    description: 'An interactive beginner course of 18 hands-on levels across 4 stages, completed by typing real Git commands in a simulated repository.'
  }
  ,
  {
    id: 'CERT_07',
    code: ' GM-BEG-0M96WLH',
    title: 'GitMastery Advanced Git Workflows',
    issuer: 'GitMastery',
    date: '2026',
    image: '/gitmastery-advanced-certificate-nomalanga (1).png',
    verificationUrl: '#',
    description: 'an interactive advanced course of 20 hands-on levels across 5 stages, completed by typing real Git commands in a simulated repository.'
  }
];

// Folders matching the vertical folder system in image_7ed7f3.jpg
const FOLDERS = [
  {
    id: '01',
    fileCode: 'FILE_01 //',
    tabCode: 'ARCHIVE LOG',
    mainTitle: 'GRID DAILY_01-05',
    bgClass: 'folder-olive',
    textColor: '#1a1d18',
  },
  {
    id: '02',
    fileCode: 'CODE_001 // DRIFT',
    tabCode: 'BIO & PHILOSOPHY',
    mainTitle: 'CURATOR BIO & LOG',
    bgClass: 'folder-cream',
    textColor: '#1f1d18',
  },
  {
    id: '03',
    fileCode: 'CODE_002 // FALLING',
    tabCode: 'EXHIBITS',
    mainTitle: 'PROJECTS & EXHIBITS',
    bgClass: 'folder-slate',
    textColor: '#000000',
    
  },
  {
    id: '04',
    fileCode: 'CODE_003 // SIGNAL',
    tabCode: 'ACCREDITATION',
    mainTitle: 'VERIFIED CREDENTIALS',
    bgClass: 'folder-amber',
    textColor: '#000000',
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFolderId, setActiveFolderId] = useState(null); // null = stack view, string = open folder
  const [hoveredFolder, setHoveredFolder] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 4000);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  
  

  const openFolder = FOLDERS.find(f => f.id === activeFolderId);

  return (
    <div className="app-container" style={styles.appContainer}>
      <div
        className={`loading-screen${isLoading ? '' : ' is-hidden'}`}
        role="status"
        aria-live="polite"
        aria-hidden={!isLoading}
      >
        <div className="loading-content">
          <div className="loading-kicker">NOMALANGA KHOZA FILE SYSTEM </div>
          <div className="loading-emblem" aria-hidden="true">NK </div>
          <h1>NOMALANGA<br /> KHOZA</h1>
          <div className="loading-meta">
            <span>PREPARING DOSSIERS</span>
            <span>04 / 04</span>
          </div>
          <div className="loading-progress" aria-hidden="true">
            <span />
          </div>
        </div>
        <div className="loading-coordinate">COLLECTION -2026 / 001</div>
      </div>

      {/* HEADER */}
      <header className="top-header" style={styles.topHeader}>
        <div className="header-brand" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="brand-title" style={styles.brandTitle}>NOMALANGA FILE SYSTEM</div>
          <span className="sub-brand" style={styles.subBrand}>VERTICAL STACK GALLERY // 2026</span>
        </div>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {activeFolderId && (
            <button
              className="back-stack-btn"
              onClick={() => setActiveFolderId(null)}
              style={styles.backStackBtn}
            >
              ← RETURN TO FILE STACK
            </button>
          )}

        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="workspace" style={styles.workspace}>
        {/* CASE 1: FULL VERTICAL FOLDER STACK VIEW */}
        {!activeFolderId ? (
          <div className="file-stack-grid" style={styles.fileStackGrid}>
            {FOLDERS.map((folder, idx) => {
              const isHovered = hoveredFolder === folder.id;
              return (
                <div
                  key={folder.id}
                  className={`folder-cover ${folder.bgClass}`}
                  onClick={() => setActiveFolderId(folder.id)}
                  onMouseEnter={() => setHoveredFolder(folder.id)}
                  onMouseLeave={() => setHoveredFolder(null)}
                  style={{
                    ...styles.verticalFolderCover,
                    transform: isHovered ? 'translateY(-14px) scale(1.01)' : 'translateY(0)',
                    boxShadow: isHovered 
                      ? '0 30px 60px rgba(0,0,0,0.9), 10px 0 30px rgba(0,0,0,0.4)' 
                      : '0 10px 30px rgba(0,0,0,0.7), 4px 0 15px rgba(0,0,0,0.3)',
                    zIndex: idx + 10,
                  }}
                >
                  {/* TOP FOLDER TAB NOTCH */}
                  <div style={styles.topCutoutTab}>
                    <span>{folder.tabCode}</span>
                  </div>

                  {/* MAIN COVER VERTICAL TYPOGRAPHY */}
                  <div style={styles.verticalTitleWrapper}>
                    <h2 className="writing-vertical" style={styles.coverLargeTitle}>
                      {folder.mainTitle}
                    </h2>
                  </div>

                  {/* COVER DETAILS */}
                  <div className="cover-footer-details" style={styles.coverFooterDetails}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', letterSpacing: '1px' }}>
                      {folder.fileCode}
                    </div>
                    <div className="barcode-graphic" style={{ marginTop: '16px' }} />
                    <div className="open-prompt" style={styles.openPrompt}>[ CLICK TO OPEN FILE ]</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* CASE 2: OPEN FILE FOLDER INTERIOR VIEW */
          <div className={`open-dossier ${openFolder.bgClass}`} style={styles.openDossierContainer}>
            
            {/* SIDE TAB SELECTOR BAR */}
            <div className="side-folder-nav" style={styles.sideFolderNav}>
              {FOLDERS.map((folder) => {
                const isActive = folder.id === activeFolderId;
                return (
                  <button
                    key={folder.id}
                    onClick={() => setActiveFolderId(folder.id)}
                    style={{
                      ...styles.sideNavTabBtn,
                      backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'transparent',
                      fontWeight: isActive ? '900' : 'bold',
                      borderLeft: isActive ? '4px solid currentColor' : '4px solid transparent',
                    }}
                  >
                    <span>{folder.id}. {folder.tabCode}</span>
                  </button>
                );
              })}
            </div>

            {/* DOSSIER INNER SHEET */}
            <div className="inner-dossier-sheet" style={styles.innerDossierSheet}>
              <div style={{ maxWidth: '960px', margin: '0 auto', color: openFolder.textColor }}>

                {/* DOSSIER HEADER BAR */}
                <div className="dossier-top-bar" style={styles.dossierTopBar}>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>
                      {openFolder.fileCode} // {openFolder.tabCode}
                    </span>
                    <h1 className={['03', '04'].includes(openFolder.id) ? 'dossier-title-contrast' : undefined} style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-0.5px', marginTop: '4px' }}>
                      {openFolder.mainTitle}
                    </h1>
                  </div>

                  <div className="stamp-badge">
                    FILE OPEN // DOSSIER RECORD VERIFIED
                  </div>
                </div>

                {/* FOLDER 01: HOME & ARCHIVE */}
                {openFolder.id === '01' && (
                  <div>
                    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginTop: '10px' }}>
                      <div style={{ flex: '1', minWidth: '280px' }}>
                        <h2 style={{ fontSize: '26px', fontWeight: '900', lineHeight: '1.2' }}>
                          PORTFOLIO INDEX & VISUAL DOSSIER
                        </h2>
                        <p style={{ fontSize: '14px', marginTop: '16px', lineHeight: '1.7',fontWeight: '900'}}>
                          Welcome to the Nomalanga Khoza archival file system gallery. Click through the vertical folder tabs on the left to inspect curator statements, interactive software projects, and acereditations.
                        </p>

                        <div style={{ marginTop: '24px', border: '1px solid currentColor', padding: '16px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                          <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>QUICK INDEX NAVIGATION</div>
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            <button onClick={() => setActiveFolderId('03')} style={styles.actionBtnDark}>
                              OPEN PROJECTS DOSSIER →
                            </button>
                            <button onClick={() => setActiveFolderId('02')} style={styles.actionBtnOutline}>
                              READ BIO LOG
                            </button>
                          </div>
                        </div>
                      </div>

                      <div style={{ flex: '1', minWidth: '280px' }}>
                        <div style={{ border: '2px solid currentColor', padding: '8px', background: 'rgba(255,255,255,0.15)' }}>
                          <img 
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                            alt="Exhibition Cover" 
                            style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                          />
                          <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '6px', textAlign: 'center' }}>
                            FIG 01.1 — NEURAL SYNTHESIZER EXPERIMENT
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* FOLDER 02: BIO LOG */}
                {openFolder.id === '02' && (
                  <div>
                    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '10px' }}>
                      <div style={{ flex: '1.2', minWidth: '280px' }}>
                        <div style={{ border: '1px solid currentColor', padding: '16px', marginBottom: '20px', backgroundColor: 'rgba(0,0,0,0.03)' }}>
                          <h3 style={{ fontSize: '19px', fontWeight: 'bold' }}>CREATIVE SOFTWARE & DATABASE ARCHITECT</h3>
                          <p style={{ fontSize: '16px', opacity: 0.8, marginTop: '4px' }}>
                            SPECIALIZATION: Responsive Web Design  / JavaScript Algorithms and Data Structures /  Introduction to Cybersecurity Badge / MS Excel (Beginner Course)
                          </p>
                        </div>

                        <div style={{ fontSize: '16px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          <p>
                            <strong>CURATOR STATEMENT:</strong> I believe digital work shouldn’t just live behind a screen—it should have real weight, texture, and physical presence. I build full-stack interfaces, interactive WebGL systems. <br></br> <br></br> But my creative energy comes from everywhere: helping with church videography, working on community projects, and exploring local markets to see how people connect with design in everyday life. Grounded by my background in web design and administration, and backed by certifications in web development, cybersecurity, AI, and GitHub badges, I bring a well-rounded, hands-on approach to everything I make.
                          </p>
    
                        </div>

                        <div style={{ marginTop: '24px', borderTop: '1px solid currentColor', paddingTop: '12px' }}>
                          <div style={styles.tableRow}>
                            <span>PRIMARY STACK:</span>
                            <span>REACT, TYPESCRIPT, THREE.JS, TAILWIND</span>
                          </div>
                          <div style={styles.tableRow}>
                            <span>DATABASE ARCHITECTURE:</span>
                            <span></span>
                          </div>
                          <div style={styles.tableRow}>
                            <span>ESTABLISHED:</span>
                            <span>2025 - 2026</span>
                          </div>
                        </div>
                      </div>

                      <div style={{ flex: '0.8', minWidth: '240px' }}>
                        <div style={{ border: '2px solid rgba(0,0,0,0.2)', padding: '20px', background: 'rgba(255,255,255,0.3)' }}>
                          <h4 style={{ fontSize: '12px', borderBottom: '1px solid #000', paddingBottom: '6px' }}>SYSTEM SPECIFICATIONS</h4>
                          
                          <div style={{ margin: '20px 0', textAlign: 'center' }}>
                            <div style={{ fontSize: '42px', fontWeight: '900' }}>{INITIAL_CERTIFICATES.length}</div>
                            <div style={{ fontSize: '10px', letterSpacing: '1px' }}>COMPLETED CERTIFICATIONS</div>
                          </div>

                          <div style={{ margin: '20px 0', textAlign: 'center' }}>
                            <div style={{ fontSize: '42px', fontWeight: '900' }}>{INITIAL_PROJECTS.length}</div>
                            <div style={{ fontSize: '10px', letterSpacing: '1px' }}>PROJECTS</div>
                          </div>

                          <div className="barcode-graphic" style={{ marginTop: '20px' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* FOLDER 03: PROJECTS EXHIBIT */}
                {openFolder.id === '03' && (
                  <div>
                    <p style={{ fontSize: '19px', marginBottom: '20px' }}>
                      SELECT ANY PROJECT FILE CARD BELOW TO INSPECT BLUEPRINTS, SOURCE CODE, AND LIVE DEMO LINKS.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
                      {INITIAL_PROJECTS.map((proj) => (
                        <div 
                          key={proj.id} 
                          className="project-card"
                          onClick={() => setSelectedProject(proj)}
                          style={{ borderRadius: '4px', overflow: 'hidden' }}
                        >
                          <div style={{ padding: '6px 12px', backgroundColor: 'rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{proj.code || proj.id}</span>
                            <span style={{ fontSize: '15px' }}>[{proj.year}]</span>
                          </div>

                          <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '190px', objectFit: 'cover' }} />

                          <div style={{ padding: '14px' }}>
                            <h3 style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '4px' }}>{proj.title}</h3>
                            <div style={{ fontSize: '15px', opacity: 0.7, marginBottom: '10px' }}>{proj.medium}</div>
                            
                            <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
                              {proj.description}
                            </p>

                            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '10px' }}>
                              {proj.tags && proj.tags.map((t, i) => (
                                <span key={i} style={styles.archivalTag}>{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FOLDER 04: CREDENTIALS */}
                {openFolder.id === '04' && (
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {INITIAL_CERTIFICATES.map((cert) => (
                        <button
                          key={cert.id}
                          className="credential-record"
                          type="button"
                          onClick={() => setSelectedCertificate(cert)}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(0,0,0,0.2)', paddingBottom: '8px' }}>
                            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{cert.code}</span>
                            <span style={{ fontSize: '16px', opacity: 0.8 }}>ISSUED: {cert.date}</span>
                          </div>

                          <h3 style={{ fontSize: '18px', margin: '12px 0 4px 0' }}>{cert.title}</h3>
                          <div style={{ fontSize: '16px', opacity: 0.8, marginBottom: '10px' }}>ISSUER: {cert.issuer}</div>

                          <p style={{ fontSize: '16px', lineHeight: '1.5', opacity: 0.9 }}>
                            {cert.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </main>

      {/* PROJECT INSPECTION MODAL */}
      {selectedProject && (
        <div className="modal-overlay" style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div style={styles.modalDocument} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalCloseBtn} onClick={() => setSelectedProject(null)}>✕ CLOSE FILE</button>

            <div style={styles.modalHeader}>
              <span className="stamp-badge">RECORD DOSSIER INSPECTION</span>
              <h2 style={{ fontSize: '22px', margin: '8px 0 4px 0' }}>{selectedProject.title}</h2>
              <p style={{ fontSize: '11px', color: '#555' }}>{selectedProject.code} • {selectedProject.year}</p>
            </div>

            <img src={selectedProject.image} alt={selectedProject.title} style={styles.modalImage} />

            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>MEDIUM / TECH STACK:</div>
              <div style={{ fontSize: '12px', marginBottom: '16px', color: '#333' }}>{selectedProject.medium}</div>

              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>BLUEPRINT DESCRIPTION:</div>
              <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#222', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={selectedProject.demoUrl || '#'} 
                  target="_blank" 
                  rel="noreferrer"
                  style={styles.actionBtnDark}
                >
                  LAUNCH DEMO →
                </a>
                <a 
                  href={selectedProject.githubUrl || '#'} 
                  target="_blank" 
                  rel="noreferrer"
                  style={styles.actionBtnOutline}
                >
                  REPOS / CODE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCertificate && (
        <div
          className="modal-overlay"
          style={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="credential-record-title"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="credential-document" onClick={(event) => event.stopPropagation()}>
            <button
              className="credential-close-button"
              type="button"
              onClick={() => setSelectedCertificate(null)}
            >
              CLOSE RECORD
            </button>
            <div className="credential-document-header">
              <span className="stamp-badge">VERIFIED CREDENTIAL</span>
              <h2 id="credential-record-title">{selectedCertificate.title}</h2>
              <p>{selectedCertificate.code}</p>
            </div>
            {selectedCertificate.image ? (
              <img
                className="credential-image"
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate or badge`}
              />
            ) : (
              <div className="credential-image-missing">
                CERTIFICATE OR BADGE IMAGE NOT ADDED YET
              </div>
            )}
            <div className="credential-document-details">
              <div><strong>ISSUER</strong><span>{selectedCertificate.issuer}</span></div>
              <div><strong>ISSUED</strong><span>{selectedCertificate.date}</span></div>
              <p>{selectedCertificate.description}</p>
              {selectedCertificate.verificationUrl && (
                <a
                  href={selectedCertificate.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.actionBtnDark}
                >
                  OPEN VERIFICATION PAGE →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// STYLING SPECIFICATIONS
const styles = {
  appContainer: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0c0d0e',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  topHeader: {
    height: '100px',
    backgroundColor: '#121417',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    zIndex: 100
  },
  brandTitle: {
    fontSize: '30px',
    fontWeight: '900',
    letterSpacing: '2px',
    color: '#f3f4f6',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  subBrand: {
    fontSize: '19px',
    color: '#9ca3af',
    letterSpacing: '1px'
  },
  backStackBtn: {
    padding: '6px 12px',
    fontSize: '17px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  
  workspace: {
    flex: 1,
    padding: '24px',
    height: 'calc(100vh - 46px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fileStackGrid: {
    display: 'flex',
    gap: '12px',
    height: '100%',
    width: '100%',
    maxWidth: '1280px',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  verticalFolderCover: {
    flex: 1,
    height: '100%',
    maxWidth: '280px',
    borderRadius: '6px',
    border: '1px solid rgba(0,0,0,0.4)',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px 18px',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    overflow: 'hidden'
  },
  topCutoutTab: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: '900',
    letterSpacing: '1px',
    border: '1px solid rgba(0,0,0,0.2)'
  },
  verticalTitleWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0'
  },
  coverLargeTitle: {
    fontSize: '28px',
    fontWeight: '900',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    maxHeight: '380px'
  },
  coverFooterDetails: {
    borderTop: '1px solid rgba(0,0,0,0.2)',
    paddingTop: '16px'
  },
  openPrompt: {
    marginTop: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: '1px',
    opacity: 0.8
  },
  openDossierContainer: {
    height: '100%',
    width: '100%',
    maxWidth: '1280px',
    borderRadius: '6px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
    border: '1px solid rgba(0,0,0,0.5)',
    display: 'flex',
    overflow: 'hidden'
  },
  sideFolderNav: {
    width: '200px',
    backgroundColor: 'rgba(0,0,0,0.12)',
    borderRight: '1px solid rgba(0,0,0,0.2)',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  sideNavTabBtn: {
    padding: '12px 16px',
    fontSize: '10px',
    textAlign: 'left',
    color: 'currentColor',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '1px',
    transition: 'background 0.2s ease'
  },
  innerDossierSheet: {
    flex: 1,
    padding: '36px 48px',
    overflowY: 'auto'
  },
  dossierTopBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '2px solid currentColor',
    paddingBottom: '16px',
    marginBottom: '28px'
  },
  actionBtnDark: {
    padding: '10px 18px',
    fontSize: '15px',
    fontWeight: '800',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  },
  actionBtnOutline: {
    padding: '10px 18px',
    fontSize: '15px',
    fontWeight: '800',
    backgroundColor: 'transparent',
    color: 'currentColor',
    border: '1px solid currentColor',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '15px',
    padding: '6px 0',
    borderBottom: '1px dashed rgba(0,0,0,0.15)'
  },
  archivalTag: {
    fontSize: '15px',
    padding: '2px 6px',
    border: '1px solid currentColor',
    borderRadius: '2px',
    opacity: 0.5
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  modalDocument: {
    width: '100%',
    maxWidth: '540px',
    backgroundColor: '#e0d8c3d3',
    color: '#1c1a16',
    border: '2px solid #000',
    boxShadow: '0 25px 50px rgba(0,0,0,0.9)',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  modalCloseBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: '#000',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    fontSize: '15px',
    cursor: 'pointer'
  },
  modalHeader: {
    padding: '20px 20px 12px 20px',
    borderBottom: '1px solid #000'
  },
  modalImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover'
  }
};