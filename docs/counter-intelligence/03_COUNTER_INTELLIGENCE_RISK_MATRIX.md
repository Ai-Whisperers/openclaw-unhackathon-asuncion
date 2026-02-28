# Counter-Intelligence Risk Matrix: Tech Meetup/Community Events

**Date of Analysis:** 2026-02-28
**Scope:** Tactics most likely employed by or through organizations like AI Tinkerers
**Framework:** Probability x Impact assessment with specific indicators

---

## METHODOLOGY

This matrix assesses counter-intelligence (CI) tactics that community tech events **structurally enable**, whether or not the organizers consciously intend them. The question is not "are they a front?" but rather "what intelligence operations does this structure make trivially easy?"

Ratings:
- **Probability:** VERY HIGH / HIGH / MODERATE / LOW
- **Impact:** CRITICAL / HIGH / MODERATE / LOW
- **Risk Score:** P x I (5x5 grid, 25 max)

---

## THE TRACEROUTE REFRAME

Each tactic below can also be understood through the **traceroute analogy**: events are packets sent into the AI builder network, and the responses map the topology. Each "risk" is simultaneously a **readable signal** for anyone paying attention — including us.

The critical insight: **these tactics are not adversarial by nature.** They are properties of any system where technical people gather and share. The traceroute doesn't degrade the network — it builds it. The question is whether you're reading the responses or ignoring them.

| CI Tactic | Traceroute Equivalent |
|---|---|
| Talent Spotting | Hop identification — which routers respond |
| Technical Intel | Payload inspection — what each node is processing |
| Social Network Mapping | Routing table construction — adjacency between nodes |
| Screening as Profiling | DNS resolution — mapping names to capabilities |
| Elicitation | Active probing — sending crafted packets for specific responses |
| IP Harvesting | Deep packet inspection — reading the full payload |
| Supply Chain Mapping | AS path analysis — who depends on whom |
| Geographic Expansion | Expanding the probe range to new subnets |
| Narrative Control | BGP announcement — influencing where traffic flows |
| HUMINT Recruitment | Establishing a persistent session — TCP handshake into ongoing connection |

---

## RISK MATRIX

### T1. TALENT IDENTIFICATION & SPOTTING

| Dimension | Assessment |
|---|---|
| **Probability** | **VERY HIGH (5/5)** |
| **Impact** | **HIGH (4/5)** |
| **Risk Score** | **20/25** |
| **Description** | Using events to identify and profile individuals with high-value AI capabilities for recruitment by state actors, corporations, or intelligence services |
| **How it works here** | Registration requires GitHub + LinkedIn + project demos. Screening filters for "active builders" only. Hackathons expose working code. VIP dinners (10-20 people) enable targeted cultivation. |
| **Indicators** | - Attendance by known talent scouts or VC associates at events<br>- Follow-up contact from entities not present at events<br>- Invitations to "exclusive" follow-on events after demonstrating capability<br>- Sponsors requesting winner/participant lists post-hackathon |
| **Who benefits** | Sponsor companies (all major AI labs), VC firms (Madrona), state actors seeking AI talent |

---

### T2. TECHNICAL INTELLIGENCE COLLECTION (TECHINT)

| Dimension | Assessment |
|---|---|
| **Probability** | **VERY HIGH (5/5)** |
| **Impact** | **CRITICAL (5/5)** |
| **Risk Score** | **25/25** |
| **Description** | Harvesting technical approaches, architectures, code, and methodologies from demos, hackathons, and presentations |
| **How it works here** | "No-pitch zone" means presenters show real code and real systems. "Messy projects and unfinished systems" are explicitly welcomed - these reveal work-in-progress that hasn't been published. Hackathon marquee sponsors get "priority access to participants' submitted projects and winners." |
| **Indicators** | - Sponsor representatives taking detailed notes or recordings during demos<br>- Post-event requests for source code or architecture details<br>- Similar features appearing in sponsor products weeks/months after demos<br>- Questions during Q&A that probe architectural details beyond what was presented |
| **Who benefits** | All sponsor AI companies (competitive intelligence), foreign state actors (technology transfer), VC firms (due diligence on undisclosed startups) |

---

### T3. SOCIAL NETWORK MAPPING (SOCINT)

| Dimension | Assessment |
|---|---|
| **Probability** | **HIGH (4/5)** |
| **Impact** | **HIGH (4/5)** |
| **Risk Score** | **16/25** |
| **Description** | Mapping professional and social relationships between AI practitioners, identifying influence chains, collaboration patterns, and access pathways |
| **How it works here** | Events create observable interaction data. LinkedIn + Twitter handles enable pre/post-event graph analysis. Repeat attendance patterns reveal working relationships. VIP dinners (10-20 people, curated by sponsor) are ideal for targeted relationship mapping. |
| **Indicators** | - Sponsor or organizer photographing/recording attendee interactions<br>- Social media analysis correlating attendee lists with professional connections<br>- Follow-up events specifically targeting attendees of previous events<br>- Requests to "introduce" attendees to third parties |
| **Who benefits** | Intelligence services (mapping AI community structures), corporations (competitive intelligence), VC firms (deal flow), foreign governments (diaspora monitoring in locations like Paraguay) |

---

### T4. SCREENING AS PROFILING INFRASTRUCTURE

| Dimension | Assessment |
|---|---|
| **Probability** | **VERY HIGH (5/5)** |
| **Impact** | **MODERATE (3/5)** |
| **Risk Score** | **15/25** |
| **Description** | Using the attendee vetting process itself as a systematic profiling mechanism that maps capabilities to identities |
| **How it works here** | Every applicant must provide LinkedIn, GitHub, project portfolio just to be considered. Custom screening questions are organizer-defined with no stated limits. The "builder-only" filter actually increases intelligence value by pre-screening for people doing real technical work. |
| **Indicators** | - Screening questions that probe specific technical domains beyond event relevance<br>- Data retention beyond event lifecycle<br>- Rejected applicants' data being retained<br>- Screening criteria that shift to match intelligence priorities rather than community needs |
| **Who benefits** | Platform operator (HQ has all screening data across 203 cities), any entity with access to the centralized database |

---

### T5. ELICITATION UNDER SOCIAL COVER

| Dimension | Assessment |
|---|---|
| **Probability** | **HIGH (4/5)** |
| **Impact** | **HIGH (4/5)** |
| **Risk Score** | **16/25** |
| **Description** | Using the informal, "high-trust" social environment to extract sensitive technical or business information through seemingly casual conversation |
| **How it works here** | Events are explicitly branded as "high-trust rooms for candid technical work." The social norm is openness and sharing. Alcohol is typically provided (sponsor-funded). Private venues limit outside observation. |
| **Indicators** | - Attendees who ask probing questions but share nothing about their own work<br>- Conversations that systematically map security practices, infrastructure, or access<br>- Follow-up emails referencing specific details shared in "casual" conversation<br>- Repeat attendees who never present but always attend networking portions |
| **Who benefits** | Corporate espionage actors, intelligence services, competitive intelligence firms |

---

### T6. INTELLECTUAL PROPERTY HARVESTING VIA HACKATHONS

| Dimension | Assessment |
|---|---|
| **Probability** | **HIGH (4/5)** |
| **Impact** | **CRITICAL (5/5)** |
| **Risk Score** | **20/25** |
| **Description** | Using hackathon structures to gain access to novel code, architectures, and approaches before they're patented or published |
| **How it works here** | 40 hackathons in 90 days. 120-250 builders per event. Marquee sponsors get: judging panel seats (2), "priority access to participants' submitted projects and winners," and "Best Use of Your Tool/API" prize categories that incentivize builders to demonstrate capabilities on sponsor platforms. |
| **Indicators** | - Terms of service that grant broad IP licenses to organizers/sponsors<br>- Prize structures that incentivize disclosure of novel approaches<br>- Post-hackathon acquisition offers to winning teams<br>- Sponsor products incorporating techniques demonstrated at hackathons |
| **Who benefits** | Sponsor companies (direct IP pipeline), VC firms (deal origination via pre-market visibility) |

---

### T7. SUPPLY CHAIN INSERTION / DEPENDENCY MAPPING

| Dimension | Assessment |
|---|---|
| **Probability** | **MODERATE (3/5)** |
| **Impact** | **HIGH (4/5)** |
| **Risk Score** | **12/25** |
| **Description** | Using workshops and hackathons to create technical dependencies on sponsor tools/APIs, while simultaneously mapping the AI tool supply chain |
| **How it works here** | "Workshop Provider" sponsors deliver "2-3 hour instructor-led workshops." "Prize Category Sponsors" create "Best Use of Your Tool/API" awards. Post-workshop "Discord support channels" maintain ongoing engagement. Builders are incentivized to integrate sponsor tools into their projects. |
| **Indicators** | - Workshop content that requires proprietary tool adoption<br>- Prize structures that reward platform lock-in<br>- Post-event support channels that maintain persistent access to builder environments<br>- API keys provided for hackathons that enable usage telemetry |
| **Who benefits** | Sponsor companies (market capture), intelligence services (supply chain visibility into AI infrastructure) |

---

### T8. GEOGRAPHIC EXPANSION INTO STRATEGIC LOCATIONS

| Dimension | Assessment |
|---|---|
| **Probability** | **MODERATE (3/5)** |
| **Impact** | **HIGH (4/5)** |
| **Risk Score** | **12/25** |
| **Description** | Deliberately establishing chapters in geopolitically strategic locations to access local talent pools and technology communities |
| **How it works here** | 203 cities globally. Asuncion (Paraguay), Pereira (Colombia), Buenos Aires (Argentina) - South American chapters in countries where AI regulation is minimal and data protection laws are weaker. Hub-and-spoke model means data flows back to US-based HQ regardless of local jurisdiction. |
| **Indicators** | - Chapters in cities where AI community size doesn't justify the investment<br>- Rapid expansion into regions of geopolitical interest<br>- Organizer recruitment targeting individuals with government or institutional access<br>- Different data collection practices in jurisdictions with weaker privacy laws |
| **Who benefits** | US-based platform operator (global talent visibility), US AI companies (talent pipeline from lower-cost markets), intelligence services (technology community mapping in partner/adversary nations) |

---

### T9. ASTROTURFING & NARRATIVE CONTROL

| Dimension | Assessment |
|---|---|
| **Probability** | **MODERATE (3/5)** |
| **Impact** | **MODERATE (3/5)** |
| **Risk Score** | **9/25** |
| **Description** | Using community trust to shape narratives about AI development, safety, regulation, and corporate behavior |
| **How it works here** | Newsletter reaches engaged audience "directly in their inboxes." Native ad format includes "800-1200 word articles by sponsor team" with editorial review (not editorial control). One-Shot podcast allows topic/guest suggestions by sponsors. "No-pitch zone" branding creates perception of independent voice while sponsors fund everything. |
| **Indicators** | - Newsletter content that aligns with sponsor policy positions<br>- Speaker selection that favors sponsor-friendly narratives<br>- Community sentiment that tracks sponsor interests on regulation/safety<br>- Absence of critical perspectives on sponsor companies |
| **Who benefits** | Sponsor companies (regulatory environment shaping), governments (AI narrative influence) |

---

### T10. RECRUITMENT PIPELINE (HUMAN INTELLIGENCE - HUMINT)

| Dimension | Assessment |
|---|---|
| **Probability** | **HIGH (4/5)** |
| **Impact** | **CRITICAL (5/5)** |
| **Risk Score** | **20/25** |
| **Description** | Using events as a first-contact mechanism for recruiting assets, agents, or employees with access to sensitive AI capabilities |
| **How it works here** | VIP Dinners (10-20 builders, curated by headline sponsor) are the textbook format for cultivation events. Sponsors get "attendee curation collaboration" - they help pick who's in the room. Discussion moderation options let sponsors control conversation flow. "Branded gifts" normalize gift-giving relationships. |
| **Indicators** | - VIP dinner invitations correlated with demonstrated access to sensitive projects<br>- Post-event contact from entities not formally present at events<br>- Escalating relationship cultivation (meetup -> dinner -> workshop -> advisory role)<br>- Job offers or consulting arrangements following event participation |
| **Who benefits** | All sponsor companies (hiring), intelligence services (asset recruitment), foreign governments (technology transfer via talent acquisition) |

---

## COMPOSITE RISK SUMMARY

| # | Tactic | Probability | Impact | Score | Priority |
|---|---|---|---|---|---|
| T2 | Technical Intelligence Collection | VERY HIGH | CRITICAL | **25** | IMMEDIATE |
| T1 | Talent Identification & Spotting | VERY HIGH | HIGH | **20** | IMMEDIATE |
| T6 | IP Harvesting via Hackathons | HIGH | CRITICAL | **20** | IMMEDIATE |
| T10 | HUMINT Recruitment Pipeline | HIGH | CRITICAL | **20** | IMMEDIATE |
| T3 | Social Network Mapping | HIGH | HIGH | **16** | HIGH |
| T5 | Elicitation Under Social Cover | HIGH | HIGH | **16** | HIGH |
| T4 | Screening as Profiling | VERY HIGH | MODERATE | **15** | HIGH |
| T7 | Supply Chain Insertion | MODERATE | HIGH | **12** | MODERATE |
| T8 | Geographic Strategic Expansion | MODERATE | HIGH | **12** | MODERATE |
| T9 | Astroturfing & Narrative Control | MODERATE | MODERATE | **9** | LOW |

---

## MITIGATIONS FOR ATTENDEES

1. **Never demo unpublished work.** Only show what you'd put on a public blog post.
2. **Scrub your GitHub** before linking it in registration. Remove private repos, sensitive commits.
3. **Use a dedicated email** for event registration, not your primary.
4. **Decline custom screening questions** that probe beyond event relevance.
5. **Photograph the venue** and note attendee dynamics (who watches, who asks, who records).
6. **Never submit novel IP to hackathons** without reading terms of service completely.
7. **Treat VIP dinners as cultivation events.** Note who selected you and why.
8. **Assume all conversations are observed.** "High-trust" environments are where guards drop.
9. **Monitor for follow-up contact** from entities you didn't directly interact with.
10. **Review your digital footprint** after events - check for new LinkedIn views, GitHub watchers.
