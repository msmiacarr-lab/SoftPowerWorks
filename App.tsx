import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import founderImage from "./assets/mia-carr.jpg";

const stats = [
  { number: "10+", label: "Years Operations Leadership" },
  { number: "$1.9M", label: "Federal Portfolio Managed" },
  { number: "56", label: "Organizations Coordinated" },
  { number: "30%", label: "Capacity Growth Delivered" },
];

const flowSteps = [
  {
    letter: "F",
    phase: "Feel the current",
    title: "Locate where the work is actually stuck.",
    body: "Not where it appears stuck — where it actually is. Before anything is built, we listen for the real issue beneath the visible symptoms: the people, the pressures, the mission context.",
  },
  {
    letter: "L",
    phase: "Lay the foundation",
    title: "Build the structure that gives work somewhere solid to go.",
    body: "Clear ownership, decision rights, and governance frameworks designed to match the actual shape of your organization — not a template imposed from outside.",
  },
  {
    letter: "O",
    phase: "Open the path",
    title: "Remove what's blocking flow.",
    body: "Workflows, handoffs, and rhythms are redesigned so work moves the way it should. Systems built to fit the real texture of the work — so people can move with clarity and less drag.",
  },
  {
    letter: "W",
    phase: "Work with ease",
    title: "Transfer, document, and sustain.",
    body: "The goal isn't just fixed — it's flowing. Every engagement ends with a handoff designed to keep moving without you holding it together.",
  },
];

const packages = [
  {
    name: "First Step Intensive",
    subtitle:
      "For leaders who know something needs to change, but need the right place to begin.",
    example:
      "Best when things feel messy, important work is getting stuck, and you need someone to help name the real issue and map the smartest first move.",
    bullets: [
      "Focused diagnosis of what is slowing the work down",
      "Clear priorities for what to address first",
      "Strategic recommendations shaped to your actual team",
    ],
  },
  {
    name: "Operational Reset",
    subtitle:
      "For teams that need stronger structure, cleaner workflows, and more trust in how work moves.",
    example:
      "Best when your team has grown, the work has gotten more complex, and your current systems no longer match how people actually need to work.",
    bullets: [
      "Workflow and ownership redesign",
      "Meeting rhythm, handoff, and decision support",
      "Systems that fit the real texture of the work",
    ],
  },
  {
    name: "Strategic Operations Retainer",
    subtitle:
      "For leaders who want ongoing partnership as they refine, scale, and lead through change.",
    example:
      "Ideal after implementation, when you need someone to maintain the system, refine it, or step in as a fractional operations partner.",
    bullets: [
      "Ongoing strategic thought partnership",
      "Implementation support and refinement",
      "A calmer, more intentional operational backbone",
    ],
  },
];

const outcomes = [
  "More clarity about what to do first",
  "Systems that support people instead of straining them",
  "Less friction across teams and handoffs",
  "Operational structure your team can actually sustain",
];

const quotes = [
  {
    text: "You are great at turning my thoughts and dreams into actions and processes.",
    name: "Paul P",
    org: "The Penniman Foundation",
  },
  {
    text: "I didn't know that a workflow could make that much of a difference!",
    name: "Stephen G",
    org: "Ellsworth, LLC",
  },
  {
    text: "I can't believe all the money you're about to make me!",
    name: "Erick B",
    org: "Burke DMV Properties",
  },
];

const process = [
  {
    step: "01",
    title: "Listen for the real issue",
    body: "We pay attention to where the friction actually lives, not just where it shows up. That means understanding the people, the pressures, and the mission before prescribing anything.",
  },
  {
    step: "02",
    title: "Shape the right structure",
    body: "We design workflows, roles, rhythms, and tools that fit the organization you actually have, so the solution feels usable instead of imposed.",
  },
  {
    step: "03",
    title: "Create room for the work",
    body: "The goal is not more process for its own sake. The goal is a better environment for people to think clearly, move well, and carry the mission with more ease.",
  },
];

const engagements = [
  {
    label: "Strategy",
    name: "Operational Reset",
    price: "Starting at $7,500",
    body: "Best for organizations that need a stronger operating structure, clearer ownership, and a more functional internal rhythm.",
  },
  {
    label: "Systems",
    name: "Workflow & Process Design",
    price: "Starting at $5,000",
    body: "Best when work is getting stuck in handoffs, approvals, or unclear systems and you need a cleaner path forward.",
  },
  {
    label: "Support",
    name: "Strategic Advisory",
    price: "Starting at $3,000/month",
    body: "Best for leaders who want ongoing thought partnership, decision support, and a steady operations mind in the room.",
  },
];

const paidCall = {
  name: "First Step Call",
  price: "$95",
  duration: "20 minutes",
  body: "A focused session for founders, executives, and teams who know something in the work is not flowing the way it should, but need help naming the issue and identifying the smartest next move.",
  bullets: [
    "A clearer read on what is actually stuck",
    "Insight into where the friction is coming from",
    "Guidance on what to address first",
    "A better sense of whether you need a larger engagement or just a sharper next step",
  ],
};

function IntroOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="intro-overlay"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="intro-center"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.35em" }}
              animate={{ opacity: 1, letterSpacing: "0.22em" }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="intro-kicker"
            >
              SoftPowerWorks
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="intro-title display"
            >
              Systems that fit people.
            </motion.h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="intro-line"
            />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{
              duration: 0.95,
              delay: 1.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="intro-slide"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Operational Reset",
    budget: "",
    timeline: "",
    details: "",
  });

  const inquiryHref = useMemo(() => {
    const subject = encodeURIComponent(
      `SoftPowerWorks Inquiry${
        formData.organization ? ` - ${formData.organization}` : ""
      }`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nInquiry Type: ${formData.inquiryType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.details}`
    );
    return `mailto:admin@softpowerworks.us?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-shell">
      <IntroOverlay show={showIntro} />

      {/* ── HERO ── */}
      <section className="hero">
        <motion.div
          className="hero-panel"
          animate={{ x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-line"
          animate={{ height: [80, 120, 80], opacity: [0.18, 0.45, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container site-nav-wrap">
          <div className="site-nav">
            <div>
              <div className="brand display">SoftPowerWorks</div>
              <div className="brand-subtitle">
                Strategic operations for people-centered teams
              </div>
            </div>
            <div className="nav-links">
              <a href="#method">Method</a>
              <a href="#strategy">Services</a>
              <a href="#support">Start</a>
            </div>
          </div>
        </div>

        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="kicker">
              10+ years · Federal, Nonprofit &amp; Startup Operations
            </div>

            <h1 className="hero-title display">
              Build systems that fit your team and make the mission easier to carry.
            </h1>

            <p className="hero-body">
              SoftPowerWorks brings 10+ years of senior operations leadership — across federal agencies, nonprofits, and founder-led organizations — to the teams and leaders who need practical infrastructure, not more overhead. Through The FLOW Method, we find where the work is stuck, build the structure it needs, and create the conditions for people to move with more ease.
            </p>

            <div className="button-row">
              <a className="button button-primary" href="#support">
                Start a conversation
                <ArrowRight className="button-icon" />
              </a>
              <a className="button button-secondary" href="#method">
                See The FLOW Method
              </a>
            </div>

            <div className="outcomes-grid">
              {outcomes.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="outcome-item"
                >
                  <div className="outcome-row">
                    <Check className="check-icon" />
                    <p>{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hero-card-wrap"
          >
            <div className="feature-grid">
              <div className="feature-grid-inner">
                <div className="portrait-wrap">
                  <img
                    src={founderImage}
                    alt="Mia Carr, founder of SoftPowerWorks"
                    className="portrait-image"
                    loading="lazy"
                  />
                  <div className="portrait-gradient" />
                  <div className="portrait-caption">
                    <p className="portrait-kicker">Founder</p>
                    <p className="portrait-name display">Mia Carr</p>
                    <p className="portrait-credentials">
                      MPA · Salesforce Admin · Google PM Certificate
                    </p>
                  </div>
                </div>
                <div className="sidebar-panel">
                  <div className="sidebar-heading">
                    <p className="sidebar-kicker">Who this is for</p>
                    <p className="sidebar-title display">
                      Leaders who know the work can run better
                    </p>
                  </div>
                  <motion.div
                    className="sidebar-body"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p>
                      Nonprofits navigating grant compliance, leadership transitions, or rapid growth. Founder-led organizations that have outgrown informal systems. Mission-driven teams where the vision is strong but the infrastructure hasn't caught up.
                    </p>
                    <p>
                      If you can feel the drag in the work — even before you've fully named it — this is where it gets addressed.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="stat-item"
              >
                <span className="stat-number display">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / QUOTES ── */}
      <section id="systems" className="section alt">
        <div className="container">
          <div className="two-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Proof</SectionLabel>
              <h2 className="section-title display">
                Clients should be able to feel the difference in how the work moves.
              </h2>
              <p className="section-body max-text">
                These responses reflect what happens when the right structure is
                in place. The work gets clearer, lighter, and more effective.
              </p>
            </motion.div>

            <div className="quote-grid">
              {quotes.map((quote, index) => (
                <motion.div
                  key={quote.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.1 }}
                  animate={{
                    y: index === 1 ? [0, 6, 0] : [0, -4, 0],
                  }}
                  className="panel"
                >
                  <p className="quote-text display">"{quote.text}"</p>
                  <p className="quote-meta">
                    {quote.name}, {quote.org}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOW METHOD ── */}
      <section id="method" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flow-header"
          >
            <SectionLabel>Methodology</SectionLabel>
            <h2 className="section-title display">The FLOW Method</h2>
            <p className="section-body flow-intro">
              Every SoftPowerWorks engagement is guided by a four-phase methodology built from 10+ years of operational practice — across federal agencies, nonprofits, and founder-led organizations. It finds where work is stuck, builds the right structure, and creates the conditions for things to move with ease.
            </p>
          </motion.div>

          <div className="flow-grid">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="panel flow-card"
              >
                <div className="flow-letter display">{step.letter}</div>
                <p className="flow-phase">{step.phase}</p>
                <h3 className="flow-title display">{step.title}</h3>
                <p className="flow-body">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section id="strategy" className="section alt">
        <div className="container">
          <div className="two-col strategy-cols">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Approach</SectionLabel>
              <h2 className="section-title display">
                The job is not to force a system into place. The job is to build
                one that fits.
              </h2>
              <p className="section-body">
                SoftPowerWorks starts by understanding where friction is
                actually coming from. From there, we build structures,
                workflows, and rhythms that support the people doing the work
                and make the mission easier to carry.
              </p>
            </motion.div>

            <div className="process-grid">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ x: 8 }}
                  className="panel process-panel"
                >
                  <div className="process-step">{item.step}</div>
                  <div>
                    <h3 className="process-title display">{item.title}</h3>
                    <p className="process-body">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS + PACKAGES ── */}
      <section className="section">
        <div className="container">
          <div className="engagements-grid">
            {engagements.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="panel"
              >
                <p className="engagement-label">{item.label}</p>
                <p className="engagement-name display">{item.name}</p>
                <p className="engagement-price">{item.price}</p>
                <p className="engagement-body">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="packages-header">
            <div>
              <SectionLabel>Packages</SectionLabel>
              <h2 className="section-title display">
                Different levels of support for different stages of the work.
              </h2>
            </div>
            <p className="packages-summary">
              Start with a focused engagement, move into a deeper reset, or
              bring SoftPowerWorks in for ongoing support once the systems are
              in motion.
            </p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="panel"
              >
                <p className="package-title display">{pkg.name}</p>
                <p className="package-subtitle">{pkg.subtitle}</p>
                <p className="package-example">{pkg.example}</p>
                <div className="package-bullets">
                  {pkg.bullets.map((bullet) => (
                    <div key={bullet} className="bullet-row">
                      <div className="bullet-dot" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT / INQUIRY ── */}
      <section id="support" className="section alt">
        <div className="container">
          <div className="support-top-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="panel"
            >
              <SectionLabel>Paid call</SectionLabel>
              <h2 className="section-title display">{paidCall.name}</h2>
              <div className="paid-meta">
                <span>{paidCall.price}</span>
                <span className="paid-sep" />
                <span>{paidCall.duration}</span>
              </div>
              <p className="section-body">{paidCall.body}</p>
              <div className="package-bullets paid-bullets">
                {paidCall.bullets.map((bullet) => (
                  <div key={bullet} className="bullet-row">
                    <div className="bullet-dot" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
              <div className="paid-actions">
                <a
                  href="https://cal.com/softpowerworks/20min"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary full-width"
                >
                  Book the First Step Call
                  <ArrowRight className="button-icon" />
                </a>
                <p className="muted-note">
                  Paid access for people who want focused insight before
                  deciding whether a larger engagement makes sense. Booking and
                  payment happen through Cal.com.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.06 }}
              className="panel panel-dark"
            >
              <SectionLabel>Inquiry</SectionLabel>
              <h2 className="section-title display">Start here.</h2>
              <p className="section-body">
                Share a little about what is happening in your organization and
                what kind of support you think you may need. This form opens a
                prefilled inquiry email to admin@softpowerworks.us.
              </p>

              <div className="form-grid">
                <div className="form-two">
                  <div>
                    <label className="field-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="form-two">
                  <div>
                    <label className="field-label" htmlFor="organization">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="Organization name"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="inquiryType">
                      Type of support
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="field"
                    >
                      <option>First Step Intensive</option>
                      <option>Operational Reset</option>
                      <option>Workflow & Process Design</option>
                      <option>Strategic Operations Retainer</option>
                      <option>Strategic Advisory</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-two">
                  <div>
                    <label className="field-label" htmlFor="budget">
                      Budget
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="Budget range"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="timeline">
                      Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="field"
                      placeholder="When do you want to start?"
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="details">
                    What is going on?
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={6}
                    className="field textarea"
                    placeholder="Tell me what feels stuck, what is changing, or what kind of support you need."
                  />
                </div>
              </div>

              <div className="paid-actions">
                <a href={inquiryHref} className="button button-primary full-width">
                  Send inquiry
                  <ArrowRight className="button-icon" />
                </a>
                <p className="muted-note">
                  I do not offer free consultation calls through the site.
                  Inquiry happens here first.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="support-bottom-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="panel"
            >
              <SectionLabel>Support</SectionLabel>
              <h2 className="section-title display">
                Soft power means creating the conditions for people and teams to
                do their best work.
              </h2>
              <p className="section-body">
                SoftPowerWorks helps organizations create systems that feel
                considered, usable, and human. It is brought in when the mission
                is strong, the vision is clear, and the team needs more support
                around how the work is carried.
              </p>
              <p className="section-body">
                The work sits at the intersection of strategy, operations, and
                executive support. It cares about what gets built, how it feels
                to carry, and whether it gives leaders and teams more room to
                contribute well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="panel panel-dark"
            >
              <SectionLabel>Contact</SectionLabel>
              <h2 className="contact-title display">Let's talk.</h2>
              <p className="section-body">
                If you know the work could be running better, this is the place
                to start. SoftPowerWorks offers focused advisory, project-based
                consulting, and ongoing strategic operations support.
              </p>
              <div className="contact-stack">
                <div className="contact-row">
                  <Mail className="contact-icon" />
                  <span>admin@softpowerworks.us</span>
                </div>
                <div className="contact-row">
                  <Phone className="contact-icon" />
                  <a href="tel:+12026810113">202-681-0113</a>
                </div>
                <div className="contact-note">
                  Selective engagements for founders, executives, and
                  mission-driven teams.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
