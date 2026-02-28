# AI Tinkerers - Data Collection & Privacy Assessment

**Date of Analysis:** 2026-02-28
**Classification:** OSINT - Data Flow Analysis

---

## 1. DATA COLLECTED AT REGISTRATION

### Mandatory / Strongly Encouraged
| Data Point | Intelligence Value |
|---|---|
| Email address | Direct contact, account correlation |
| LinkedIn URL | Full professional history, network graph |
| Twitter/X handle | Public opinions, social graph, sentiment |
| GitHub repository links | **Technical capabilities, code quality, project IP** |
| Replit URL | Active projects, coding patterns |
| Builder screening responses | Self-disclosed expertise areas |

### Optional / Event-Specific
| Data Point | Intelligence Value |
|---|---|
| Company name | Employer identification |
| Job title | Seniority/access level mapping |
| Phone number | Direct contact, device tracking potential |
| AWS-specific: country, postal code, job role, industry | **Demographic and sector targeting** |
| Custom screening questions (organizer-defined) | **Open-ended intelligence collection** |

## 2. DATA COLLECTED AT EVENTS

| Collection Method | What It Captures |
|---|---|
| Physical attendance at private venues | **Confirms real identity, photographs, biometrics** |
| Sponsor QR code opt-ins | Links attendee to sponsor interest |
| Demo presentations | **Reveals proprietary approaches, unreleased capabilities** |
| Hackathon project submissions | **Full source code, architectural decisions, team compositions** |
| Networking / social interactions | Relationship mapping (who talks to whom) |
| Mixpanel analytics | Browsing behavior, engagement patterns, device fingerprinting |
| No stated photography/recording policy | **Unstated = uncontrolled capture is possible** |

## 3. DATA FLOWS

```
ATTENDEE
  |
  v
Registration Platform (aitinkerers.org)
  |
  +--> Organizer (local city lead) - sees screening data
  |
  +--> HQ Platform (Heitzeberg's infrastructure)
  |      |
  |      +--> Mixpanel (analytics third party)
  |      |
  |      +--> Email system (post-event comms)
  |      |
  |      +--> Sponsor "opt-in intros via HQ"
  |             (HQ mediates = HQ sees all flows)
  |
  +--> Sponsors (via QR opt-in at events)
  |      |
  |      +--> OpenAI, Anthropic, Google, Microsoft, Amazon...
  |
  +--> Hackathon Project Access
         |
         +--> Marquee sponsors get "priority access to
              participants' submitted projects and winners"
```

## 4. CRITICAL OBSERVATIONS

### What they claim:
- "No bulk lists" shared with sponsors
- Opt-in only via QR codes
- "Community-driven" not corporate

### What the structure enables:
1. **HQ sees everything.** All registration data flows through centralized platform. The "opt-in intros via HQ" model means HQ mediates all sponsor-attendee connections and thus has complete visibility.

2. **Screening IS profiling.** Requiring GitHub, LinkedIn, and project portfolios as entry criteria means the organization builds detailed capability profiles of every attendee before they walk in the door.

3. **"No bulk lists" != "no data sharing."** Sponsors get speaking slots, demo tables, judging seats, and project access. They collect their own data at events through direct interaction.

4. **No photography/recording policy stated.** The FAQ is silent on this. In intelligence terms, absence of a prohibition is permission.

5. **Custom screening questions** are organizer-defined with no stated limits. A city organizer could ask anything.

6. **AWS-specific data collection** for certain events (country, postal code, job role, industry) reveals that at least Amazon has negotiated custom data fields into the registration flow.

7. **Private venues with post-confirmation disclosure** means attendees cannot research the venue, assess exits, or evaluate the physical security environment beforehand.

## 5. COMPARISON: What a legitimate meetup needs vs. what AI Tinkerers collects

| Legitimate Need | What AI Tinkerers Also Collects |
|---|---|
| Email for event updates | LinkedIn, GitHub, Twitter, Replit, phone |
| Name for badge | Company, job title, screening responses |
| RSVP count for venue | AWS demographic data, custom questions |
| Basic interest filtering | Full professional capability profile |

The delta between "what's needed" and "what's collected" is the intelligence surplus.
