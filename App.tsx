import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Mail, Sparkles } from "lucide-react";

const founderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAIAAABUEpE/AAAgAElEQVR42uy92ZIkyZId5mbmS0Rk1tK3ZYChCGWGwk8BPgD8Ngr5MbAT4SDwA+AnwE+AMFYXX4wqV6q7qkREZGRm5r1fVf1zT3ePjIjMyMiI93h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4v7x9A3u4d8P1+u7f7+8fP379+vXr16/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv369evXr1+/fv36/ff3L7C7w6Y7Y9mWZVnG5/N5nU5nWZZlWc7nM5/P53EcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4fD4/8w3m0h9m2bJk2bdu2bdv2+Xy+Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1er1er9fr9Xq9Xq/X6/V6vV6v1+v1+v3f7f4bQ4f3V8v//+c3r06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06PH/AAABAAEAAP8A/9k=";

const packages = [
  {
    name: "First Step Intensive",
    subtitle: "For leaders who know something needs to change, but need the right place to begin.",
    example: "Best when things feel messy, important work is getting stuck, and you need someone to help name the real issue and map the smartest first move.",
    bullets: [
      "Focused diagnosis of what is slowing the work down",
      "Clear priorities for what to address first",
      "Strategic recommendations shaped to your actual team",
    ],
  },
  {
    name: "Operational Reset",
    subtitle: "For teams that need stronger structure, cleaner workflows, and more trust in how work moves.",
    example: "Best when your team has grown, the work has gotten more complex, and your current systems no longer match how people actually need to work.",
    bullets: [
      "Workflow and ownership redesign",
      "Meeting rhythm, handoff, and decision support",
      "Systems that fit the real texture of the work",
    ],
  },
  {
    name: "Strategic Operations Retainer",
    subtitle: "For leaders who want ongoing partnership as they refine, scale, and lead through change.",
    example: "Ideal after implementation, when you need someone to maintain the system, refine it, or step in as a fractional operations partner.",
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
    name: "Paul Penniman",
    org: "The Penniman Foundation",
  },
  {
    text: "I didn’t know that a workflow could make that much of a difference!",
    name: "Stephen G",
    org: "Ellsworth, LLC",
  },
  {
    text: "I can’t believe all the money you’re about to make me!",
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
            transition={{ duration: 0.95, delay: 1.7, ease: [0.76, 0, 0.24, 1] }}
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

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-shell">
      <IntroOverlay show={showIntro} />

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
              <div className="brand-subtitle">Strategic operations for people-centered teams</div>
            </div>
            <div className="nav-links">
              <a href="#strategy">Strategy</a>
              <a href="#systems">Systems</a>
              <a href="#support">Support</a>
            </div>
          </div>
        </div>

        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-copy"
          >
            <div className="kicker">
              <Sparkles className="kicker-icon" />
              Systems that fit people, support mission, and create room to work well
            </div>
            <h1 className="hero-title display">
              SoftPowerWorks helps leaders build systems that strengthen teams and make the mission easier to carry.
            </h1>
            <p className="hero-body">
              SoftPowerWorks is a strategic consulting firm for founders, executives, and mission-driven organizations that need better ways of working. We help teams create workflows, operating rhythms, and structures that fit the real shape of the work so people can move with more clarity, less friction, and greater trust.
            </p>

            <div className="button-row">
              <a className="button button-primary" href="#support">
                Start a strategic conversation
                <ArrowRight className="button-icon" />
              </a>
              <a className="button button-secondary" href="#systems">
                Explore the work
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
            <motion.div
              className="hero-card-outline"
              animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="feature-grid">
              <div className="feature-grid-inner">
                <div className="portrait-wrap">
                  <motion.img
                    src={founderImage}
                    alt="Mia Carr"
                    className="portrait-image"
                    animate={{ scale: [1, 1.035, 1], x: [0, -6, 0], y: [0, -8, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="portrait-gradient" />
                  <div className="portrait-caption">
                    <p className="portrait-name display">Mia Carr</p>
                    <p className="portrait-text">
                      Strategic operator, builder of structure, and trusted partner for leaders who want the work to feel stronger without becoming harder to carry.
                    </p>
                  </div>
                </div>
                <div className="sidebar-panel">
                  <div className="sidebar-heading">
                    <p className="sidebar-kicker">Who this is for</p>
                    <p className="sidebar-title display">Leaders who know the work can run better</p>
                  </div>
                  <motion.div
                    className="sidebar-body"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p>
                      SoftPowerWorks is for leaders who can feel the drag in the work, even if they have not fully named the problem yet.
                    </p>
                    <p>
                      It is especially useful for founder-led firms, consultancies, nonprofits, and high-accountability teams that need stronger ways of working without making the organization feel heavier.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                These responses reflect what happens when the right structure is in place. The work gets clearer, lighter, and more effective.
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
                  animate={{ y: index === 1 ? [0, 6, 0] : [0, -4, 0] }}
                  className="panel"
                >
                  <p className="quote-text display">“{quote.text}”</p>
                  <p className="quote-meta">{quote.name}, {quote.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="section">
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
                The job is not to force a system into place. The job is to build one that fits.
              </h2>
              <p className="section-body">
                SoftPowerWorks starts by understanding where friction is actually coming from. From there, we build structures, workflows, and rhythms that support the people doing the work and make the mission easier to carry.
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

      <section className="section alt">
        <div className="container">
          <div className="packages-header">
            <div>
              <SectionLabel>Packages</SectionLabel>
              <h2 className="section-title display">
                Different levels of support for different stages of the work.
              </h2>
            </div>
            <p className="packages-summary">
              Start with a focused engagement, move into a deeper reset, or bring SoftPowerWorks in for ongoing support once the systems are in motion.
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
                className="panel package-panel"
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

      <section id="support" className="section">
        <div className="container">
          <div className="support-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="panel support-copy"
            >
              <SectionLabel>Support</SectionLabel>
              <h2 className="section-title display">
                Soft power means creating the conditions for people and teams to do their best work.
              </h2>
              <p className="section-body">
                SoftPowerWorks helps organizations create systems that feel considered, usable, and human. We are brought in when the mission is strong, the vision is clear, and the team needs more support around how the work is carried.
              </p>
              <p className="section-body">
                Our work sits at the intersection of strategy, operations, and executive support. We care about what gets built, how it feels to carry, and whether it gives leaders and teams more room to contribute well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="panel support-contact"
            >
              <SectionLabel>Contact</SectionLabel>
              <h2 className="contact-title display">Let’s talk.</h2>
              <p className="section-body">
                If you know the work could be running better, this is the place to start. SoftPowerWorks offers focused advisory, project-based consulting, and ongoing strategic operations support.
              </p>
              <div className="contact-stack">
                <div className="contact-row">
                  <Mail className="contact-icon" />
                  <span>hello@softpowerworks.us</span>
                </div>
                <div className="contact-note">
                  Selective engagements for founders, executives, and mission-driven teams.
                </div>
              </div>
              <a className="button button-primary full-width" href="mailto:hello@softpowerworks.us?subject=SoftPowerWorks%20Inquiry">
                Inquire about working together
                <ArrowRight className="button-icon" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
