# 🎯 TALENT SCOUTING SYSTEM: Deep Evaluation Framework
## For OpenClaw Unhackathon Asunción (Feb 28, 2026)

---

## PART 1: Understanding the AI Talent Archetypes

### 🧠 The Six Core Archetypes You'll Meet

#### **1. THE ARCHITECT** (Rare 🟢 - High Value if aligned)

**What they actually do:**
- Design systems that scale
- Think 5 steps ahead
- Worry about edge cases you haven't considered
- Expensive to time (they ask tons of clarifying questions)

**How to identify:**
- They ask "What happens when..." before coding
- They draw diagrams on whiteboards
- They mention trade-offs unprompted
- They've built systems with 10k+ users

**Conversation signals:**
```
You: "How would you build a Slack-to-GitHub integration?"
ARCHITECT: "What's your expected message volume? 
          Are you handling duplicates? 
          What if GitHub API goes down? 
          How do you handle auth? 
          Can you explain your data model?"

You: "Uh... I haven't thought about that"
ARCHITECT: "Exactly. Let's think through this first."
```

**Red flags:**
- Wants to "perfect" the design before shipping (perfectionism > shipping)
- Says "my way is the only way"
- Dismisses practical concerns ("We'll optimize later")
- Never ships anything

**Value to your project:**
- ✅ If you want rock-solid architecture
- ❌ If you want to ship fast and iterate

**Useful for Slack-to-GitHub?** YES—if you value reliability over speed

---

#### **2. THE EXECUTOR** (Common 🟡 - Always valuable)

**What they actually do:**
- Turn ideas into working code in 2 hours
- Don't overthink, just ship
- Pragmatic problem-solving
- Make decisions and move on

**How to identify:**
- They've shipped 5+ projects
- They talk about what WORKS, not what's theoretically perfect
- They mention deadlines and constraints
- They've worked with people they didn't like (reality check)

**Conversation signals:**
```
You: "How would you build a Slack-to-GitHub integration?"
EXECUTOR: "Node.js, Composio for the APIs, 
          store state in Redis. 
          Done by tonight. 
          What could go wrong?"

You: "GitHub API rate limits?"
EXECUTOR: "Queue the requests, batch them. 
          Minimum retry logic. 
          We'll refine if needed."
```

**Red flags:**
- Only cares about shipping, dismisses technical debt
- No tests (ever)
- "We'll deal with that later" (but never do)
- Can't explain WHY they chose something

**Value to your project:**
- ✅ Absolutely critical for a 3.5-hour hackathon
- ✅ Will have working code when others are still planning

**Useful for Slack-to-GitHub?** YES—this is your primary target

---

#### **3. THE SPECIALIST** (Common 🟡 - Value depends on domain)

**What they actually do:**
- Deep expertise in ONE area (LLMs, DevOps, databases, frontend)
- Can solve hard problems in their domain
- Useless outside their domain
- Often strong opinions about their specialty

**How to identify:**
- They talk in domain-specific jargon
- They've contributed to major libraries in their specialty
- They know the gotchas that others miss
- They get frustrated when people don't understand their domain

**Conversation signals:**
```
SPECIALIST (LLM FOCUSED): "You're parsing Slack messages? 
                          Use embeddings, not regex. 
                          Here's the token limit issue you'll hit..."

SPECIALIST (DEVOPS): "Running 24/7? You need orchestration. 
                     Kubernetes, or at minimum Docker + systemd. 
                     Have you thought about monitoring?"

SPECIALIST (FRONTEND): "Your CLI will confuse people. 
                      Make a dashboard. 
                      Here's why UX matters."
```

**Red flags:**
- Only wants to work on their specialty
- Dismisses other parts of the project
- Will die on a hill for their technology choice
- Can't explain why their way is better (just assumes it)

**Value to your project:**
- ✅ If you need deep expertise in their domain
- ❌ If you need someone who can wear multiple hats
- ⚠️ If they're not aligned with your problem (they'll slow you down)

**Useful for Slack-to-GitHub?** CONDITIONAL
- ✅ LLM specialist = maybe (prompt engineering?)
- ✅ Backend specialist = definitely
- ✅ DevOps specialist = helpful later
- ❌ Frontend specialist = not necessary for MVP

---

#### **4. THE LEARNER** (Common 🟡 - High effort, mixed value)

**What they actually do:**
- Extremely curious
- Ask smart questions
- Can learn anything quickly
- BUT slow on their first implementation in a domain
- Will catch mistakes others miss (questions everything)

**How to identify:**
- They mention side projects frequently
- They ask "Why does it work that way?" constantly
- They've switched tech stacks multiple times
- They read docs thoroughly
- They're usually newer to the industry (2-5 years)

**Conversation signals:**
```
You: "We're using Node.js for the gateway"
LEARNER: "Why Node and not Python? What are the trade-offs?
         What happens with CPU-bound operations?
         Have you benchmarked it?"

You: *explaining something*
LEARNER: *takes notes* "Wait, so when Slack throttles us..."
         "Could we use a different pattern instead?"
```

**Red flags:**
- Paralyzed by choice (wants to learn everything)
- Will spend 2 hours researching the "best" approach
- Needs hand-holding on first implementation
- Can become a rabbit-hole in 3-hour hackathon

**Value to your project:**
- ✅ If you have time for mentoring
- ✅ If you want thorough documentation later
- ❌ If you're in a rush
- ✅ If you want someone who'll stick with the project long-term

**Useful for Slack-to-GitHub?** CONDITIONAL
- ✅ Great if someone else is driving the architecture
- ❌ Bad if they're the only one on backend
- ✅ Good for writing tests (they're thorough)

---

#### **5. THE TALKER** (Common 🔴 - Usually low value)

**What they actually do:**
- Talk about building things
- Don't actually build things
- Excited about ideas
- Frustrated when reality is harder than the idea

**How to identify:**
- All their projects are "almost done"
- They talk more than they code
- They have lots of ideas but few shipped projects
- They focus on the "what" not the "how"
- They get bored during implementation

**Conversation signals:**
```
You: "Have you built integrations before?"
TALKER: "Oh yeah, lots of ideas. I was planning to build 
        a Slack-to-GitHub thing actually! 
        I also want to do Slack-to-Jira, 
        Slack-to-Trello, Slack-to-everything really..."

You: "So you've shipped one of these?"
TALKER: "Well, I started one, but I got busy. 
        But I know EXACTLY how I'd build it..."
```

**Red flags:**
- More ideas than shipped projects
- Can't point to actual code they wrote
- Says "I could build that" rather than "I built that"
- Gets distracted by new ideas during conversations
- Focuses on outcome ("We'll make money") not process ("Here's how I'd...")

**Value to your project:**
- ❌ Almost always a net drain on a hackathon
- ✅ ONLY useful if you need someone to network/promote
- ❌ Will not ship code

**Useful for Slack-to-GitHub?** NO

---

#### **6. THE BUILDER-MENTOR** (Rare 🟢 - Extremely high value)

**What they actually do:**
- Have shipped 10+ projects
- Help others improve
- Think about both execution AND architecture
- Honest about constraints
- Make others better just by being around them

**How to identify:**
- People gravitate toward them for advice
- They've mentored people who became successful
- They can explain complex things simply
- They admit what they don't know
- They've learned from big failures
- They talk about systems and patterns, not just code

**Conversation signals:**
```
You: "How would you approach this?"
MENTOR: "Good question. I built something similar 5 years ago. 
        Here's what worked, here's what didn't.
        Here's the trap I fell into.
        For YOUR situation, I'd suggest..."

You: *asking follow-up*
MENTOR: "Great follow-up. Here's why that matters..."
        [explains the principle, not just the answer]
```

**Red flags:**
- None, really. If someone has this vibe, they're for real.
- Only possible red flag: they're too busy/overcommitted

**Value to your project:**
- ✅✅✅ Incredibly high value
- ✅ You'll learn more in 2 hours with them than others teach in 2 weeks
- ✅ They'll help you avoid disasters
- ✅ They'll push you to ship

**Useful for Slack-to-GitHub?** ABSOLUTELY YES

---

## PART 2: Deep Evaluation Framework

### The Three-Layer Interview System

You'll move through layers based on their responses:

#### **LAYER 1: Quick Qualification (2 minutes)**
Goal: Are they worth 15 more minutes?

```
Q1: "What's the most interesting thing you've shipped in the last year?"
    
    🟢 GREEN SIGNALS:
    - Specific project with details
    - They can explain what made it work
    - User impact or metrics mentioned
    - They learned something from it
    
    🔴 RED SIGNALS:
    - "I'm working on something" (not shipped)
    - Vague answer ("a website")
    - They can't explain how it worked
    - No measurable outcome

Q2: "What tech stack are you most comfortable with?"
    
    🟢 GREEN SIGNALS:
    - Specific tools with reasons WHY
    - They've used it on production systems
    - They know its limitations
    - They can explain trade-offs
    
    🟡 YELLOW SIGNALS:
    - They list 10 frameworks
    - "Whatever works"
    - No depth to their answer
    
    🔴 RED SIGNALS:
    - Only tutorials/bootcamp projects
    - Can't name specific tools
    - "I can learn anything"

Q3: "If we're building this weekend and something breaks at hour 3, 
     what's your worst-case scenario?"
    
    🟢 GREEN SIGNALS:
    - They immediately name specific failure modes
    - "Here's how I'd debug it"
    - They've dealt with this before
    - They stay calm thinking about it
    
    🟡 YELLOW SIGNALS:
    - "I guess we'd figure it out"
    - Generic answer
    - Nervous energy
    
    🔴 RED SIGNALS:
    - "That won't happen"
    - "No idea"
    - They get visibly anxious
```

**Decision after Layer 1:**
- All 3 green? → Move to Layer 2
- 2 green + 1 yellow? → Maybe Layer 2 (if time)
- Anything red? → Polite exit, move on

---

#### **LAYER 2: Depth Assessment (10-15 minutes)**
Goal: Can they actually execute on YOUR project?

**For your specific project (Slack-to-GitHub integration), ask:**

```
Q4: "Walk me through how you'd handle Slack message parsing. 
     What could go wrong?"

    POOR ANSWER: "I'd use Slack API to get messages"
    
    GOOD ANSWER: "I'd handle different message types—plain text, 
                 threads, reactions, file uploads. 
                 I'd need to figure out: 
                 - How to handle message edits
                 - Rate limiting from Slack
                 - Deduplication if we retry"
    
    GREAT ANSWER: "I've done this before. Here are the gotchas:
                  - Slack uses events API, not polling
                  - You need to handle challenge requests
                  - Thread replies are separate events
                  - User mentions use <@USERID> format
                  - I'd normalize everything before GitHub
                  - One question: Are you handling file uploads?"

Q5: "How would you know if your integration is working right?"

    POOR: "If it creates issues in GitHub"
    
    GOOD: "Track success rate, measure latency, 
          test different message types,
          monitor error logs"
    
    GREAT: "I'd have dashboards showing:
           - Messages received vs issues created
           - Latency percentiles (p50, p99)
           - Error breakdown (GitHub down, malformed message, etc)
           - User-reported issues
           - I'd have a canary period before full rollout"

Q6: "What's one integration you've done that was harder than expected?"

    POOR: "I haven't done integrations"
    
    GOOD: "Built a Stripe integration, handling webhooks was tricky"
    
    GREAT: "Built a payment integration. The hard part wasn't 
           the API—it was thinking through failure modes:
           - What if webhook arrives before DB write completes?
           - What if we process same webhook twice?
           - How do we handle idempotency?
           I had to learn about event sourcing. Worth it."
    
    💡 This reveals: Honest about struggles, learns from them, 
                    thinks about systems not just happy path

Q7: "If you had to ship this in 3 hours, what's your MVP?"

    POOR: "The full thing, it's not that hard"
    
    GOOD: "Just plain text messages to issues, 
          no special formatting, sync only"
    
    GREAT: "MVP is:
           - Parse simple Slack messages
           - Create GitHub issues from them
           - One direction only (no sync back)
           - No auth complexity
           - No rate limit handling (manual for now)
           
           Phase 2 (if time):
           - Handle threads
           - Add formatted descriptions
           
           Phase 3:
           - Real error handling
           - Sync back from GitHub"
    
    💡 This reveals: Can they scope? Prioritize? Know their time?
```

**Decision after Layer 2:**
- Nailed 5+ questions? → Layer 3 (serious prospect)
- Got 3-4? → Useful but not core team
- 1-2? → Can help with specific task, don't rely on them
- 0? → Polite exit

---

#### **LAYER 3: Collaboration Fit Assessment (10 minutes)**
Goal: Will you actually work well together?

```
Q8: "Tell me about a time you disagreed with a team member 
     on technical approach. How did you resolve it?"

    RED FLAGS (deal-breakers):
    ❌ "I don't disagree, my way is right"
    ❌ "I just did what they wanted, even though it was wrong"
    ❌ "We didn't really resolve it"
    ❌ "They were wrong and stubborn"
    
    GREEN FLAGS:
    ✅ "We discussed trade-offs"
    ✅ "I presented my reasoning and listened to theirs"
    ✅ "We agreed on success metrics and went with their approach"
    ✅ "Turned out they were right, I learned something"
    ✅ "We found a third approach that worked better"

Q9: "What's something about your own technical approach 
     you'd improve if you had time?"

    RED FLAGS:
    ❌ "Nothing, it's all pretty good"
    ❌ Deflects ("People should listen to me more")
    
    GREEN FLAGS:
    ✅ Specific self-awareness
    ✅ "I take too long optimizing too early"
    ✅ "I don't write tests initially, wish I did"
    ✅ "I struggle with the human side of projects"

Q10: "If our approach isn't working at hour 2, 
      how do you feel about pivoting?"

    RED FLAGS:
    ❌ "We shouldn't pivot, commit to the plan"
    ❌ "Depends on who's right about what went wrong"
    ❌ Defensive energy
    
    GREEN FLAGS:
    ✅ "Pivot immediately if we have data"
    ✅ "As long as we document why we're pivoting"
    ✅ "What matters is shipping something useful"
    ✅ "I'd want to understand why it's not working first"

Q11: "What kind of person brings out your best work?"

    GREAT ANSWER: "Someone who pushes back on my ideas, 
                  who knows more than me in some areas, 
                  who stays calm under pressure, 
                  who cares about shipping"
    
    Reveals: They know themselves, they seek growth,
            they don't need constant validation

Q12: "What would you do first minute on Feb 28 if we're teammates?"

    GREAT ANSWERS:
    ✅ "Understand the actual user problem"
    ✅ "Map out the integration points"
    ✅ "Ask what success looks like"
    ✅ "Get the environment set up"
    ✅ "Disagree with parts of your plan"
    
    RED FLAGS:
    ❌ "Start coding"
    ❌ "Follow your plan exactly"
    ❌ "Ask what I should do"
```

**Decision after Layer 3:**
- 4+ strong greens? → **Definitely in your core team**
- 2-3 strong greens? → **In your team, give them a specific role**
- 1-2 strong greens? → **Can help on specific problems**
- Mostly reds? → **Polite no thanks, wish them luck**

---

## PART 3: Compatibility Matrix

Once you identify people, determine team fit:

```
YOUR PROJECT NEEDS:

[ ] 1 Architect/Senior (mandatory - not just executor)
[ ] 1-2 Executors (mandatory - ship code)
[ ] 0-1 Specialist (optional - depth in one area)
[ ] 0-1 Learner (optional - fresh perspective, thoroughness)
[ ] 0 Talkers (avoid)

BAD COMBINATIONS:
❌ Architect + Architect (argument city)
❌ Talker + Anyone (drain on energy)
❌ Learner + Learner (too slow)
❌ Specialist (Frontend) + Specialist (Backend) + nobody to mediate

GREAT COMBINATIONS:
✅ Executor + Executor + Architect (fast execution + good design)
✅ Executor + Specialist (Backend) (speed + depth)
✅ Executor + Mentor (learn while shipping)
✅ Executor + Executor + Learner (speed + learning + curiosity)
```

---

## PART 4: Red Flags to Walk Away

**Immediate deal-breakers (end conversation now):**

```
1. "I'm just here to learn, don't expect me to code much"
   → Wrong event mindset for your goal

2. "I only work with [specific framework]"
   → Inflexible, will argue about tech instead of shipping

3. "I don't really have a GitHub/portfolio"
   → Can't validate their abilities

4. "I've got 5 other ideas I want to explore"
   → Won't focus on YOUR project

5. "I'm sure we can add [10 features] by end of day"
   → Doesn't understand scope/time

6. "I've heard about Node.js but never actually used it"
   + "I don't really like pair programming"
   → You're in trouble

7. "I mainly do [completely different tech stack]"
   + They seem resistant to learning
   → Training burden on YOU
```

---

## PART 5: Before Feb 28 - Research Phase

Do this **right now** to compress evaluation at event:

### Search GitHub for attendees (if you can find names):

```bash
# For each potential teammate:
1. Find their GitHub profile
2. Look at LAST 6 MONTHS of activity:
   - How many commits?
   - What languages?
   - Are projects completed or abandoned?
   - Do they write tests?
   
3. Check their README quality:
   - Do they document their projects?
   - Do they explain decisions?
   
4. Look for open source contributions:
   - Depth of understanding needed
   - How they interact with other developers
   
5. Read their recent issues/PRs:
   - How do they explain technical problems?
   - Do they ask good questions?
   - Do they help others?
```

### LinkedIn/Twitter reconnaissance:

```
Look for:
- Blog posts about technical decisions
- Conference talks (often indicates depth)
- How they describe their work
- Who they're connected to (signals network quality)
- Activity level (are they engaged?)
```

### Slack reconnaissance (if you're in the OpenClaw channel):

```
Who's asking smart questions?
Who's offering to help others?
Who's sharing resources/articles?
Who's vague about their background?
```

---

## PART 6: Conversation Cheat Sheet

**Print or memorize this** for quick reference during Feb 28:

```
LAYER 1 ASSESSMENT:
├─ Q1: "What's the most interesting thing you shipped?"
│   └─ Green = specific, shipped, learnings, impact
├─ Q2: "Tech stack you're most comfortable with?"
│   └─ Green = specific tools with reasons
└─ Q3: "Worst-case scenario at hour 3?"
    └─ Green = specific failure modes, knows how to debug

IF 2-3 green → Move to LAYER 2

LAYER 2 ASSESSMENT:
├─ Q4: "Walk me through Slack message parsing"
│   └─ Green = knows edge cases
├─ Q5: "How would you know if it's working?"
│   └─ Green = metrics/monitoring mindset
├─ Q6: "Integration that was harder than expected?"
│   └─ Green = learns from struggles
└─ Q7: "MVP in 3 hours?"
    └─ Green = can scope and prioritize

IF 4+ good answers → Move to LAYER 3

LAYER 3 ASSESSMENT:
├─ Q8: "Disagreement resolution"
│   └─ Green = listens, finds middle ground
├─ Q9: "What would you improve about yourself?"
│   └─ Green = self-aware, not defensive
├─ Q10: "Can you pivot if needed?"
│   └─ Green = pragmatic, data-driven
├─ Q11: "What kind of person brings your best?"
│   └─ Green = seeks growth, doesn't need validation
└─ Q12: "First minute on Feb 28?"
    └─ Green = understands project context

DECISION:
4+ strong = Core team
2-3 = Secondary team
0-1 = Single task helper
Any reds = Polite exit
```

---

## PART 7: Your Scoring Rubric

Create a simple grid to track people:

```
NAME: _______________

LAYER 1 SCORES (2-3 min):
- Shipped something concrete? [1-5]  ___
- Knows their tech stack? [1-5]      ___
- Aware of failure modes? [1-5]      ___
TOTAL: ___ / 15
→ If 9+, go to Layer 2

LAYER 2 SCORES (10-15 min):
- Slack parsing depth? [1-5]         ___
- Metrics/monitoring mindset? [1-5]  ___
- Learns from struggles? [1-5]       ___
- Can scope to MVP? [1-5]            ___
TOTAL: ___ / 20
→ If 12+, go to Layer 3

LAYER 3 SCORES (5-10 min):
- Collaboration maturity? [1-5]      ___
- Self-awareness? [1-5]              ___
- Flexibility/pragmatism? [1-5]      ___
- Growth mindset? [1-5]              ___
- Project understanding? [1-5]       ___
TOTAL: ___ / 25

OVERALL:
Layer 1: ___ / 15
Layer 2: ___ / 20
Layer 3: ___ / 25
TOTAL: ___ / 60

DECISION:
50+ = Core team member ✅
40-49 = Secondary team ✅
30-39 = Task-specific help ⚠️
<30 = Pass (politely) ❌
```

---

## PART 8: Execution Timeline

**ONE WEEK BEFORE (Feb 21):**
- [ ] Research attendee profiles (GitHub, LinkedIn, Twitter)
- [ ] Print cheat sheet + scoring rubric
- [ ] Prep 30-second pitch for your project
- [ ] Identify "must talk to" people from research
- [ ] Mental note of red flags to watch for

**FEB 28 - 5:00 PM (Before event starts):**
- [ ] Review cheat sheet
- [ ] Remember: you have 3.5 hours but 62 people
- [ ] You probably have time for 8-10 detailed conversations
- [ ] Quality > Quantity

**5:00-6:00 PM (Framing + Quick Scan):**
- [ ] Listen to intro
- [ ] Quick 2-min chats with 15-20 people (Layer 1)
- [ ] Mark top 8-10 candidates
- [ ] GET THEIR SLACK HANDLES (crucial!)

**6:00-8:00 PM (Deep Assessment):**
- [ ] 15-min Layer 2 convos with your top 8-10
- [ ] Narrow to 5-6 realistic team members
- [ ] Start Layer 3 with top 3-4

**8:00-9:30 PM (Formation):**
- [ ] Commit to your core team (3-4 people)
- [ ] Assign roles based on their strengths
- [ ] Start building together

---

## PART 9: Your Own Introduction

**When someone asks about you, this is your 30-second pitch:**

```
"I'm building a Slack-to-GitHub integration for production teams.
The idea: parse messages from Slack → auto-create GitHub issues.

I'm looking for an executor who:
- Knows Node.js OR is willing to learn in 2 hours
- Has integrated with APIs before (GitHub, Slack, or similar)
- Wants to ship working code, not a half-baked idea
- Can handle ambiguity and problem-solve on the fly

If that sounds like you and you care about actually shipping,
let's talk. Otherwise, good luck with your project."
```

**Why this works:**
- ✅ Specific (not vague)
- ✅ Honest about what you need
- ✅ Filters out wrong people immediately
- ✅ Shows you've thought about it
- ✅ Invites them to decide if they fit

---

## FINAL CHECKLIST: Are You Ready?

Before Feb 28, answer YES to all:

- [ ] I understand the 6 archetypes well enough to recognize them
- [ ] I can run Layers 1-3 quickly without reading my notes
- [ ] I know what RED FLAGS look like
- [ ] I have my project pitch down to 30 seconds
- [ ] I know my tech stack (Node.js, Composio, etc)
- [ ] I understand what I DON'T know and can ask smart questions
- [ ] I won't talk to someone for 30 minutes (respect their time)
- [ ] I have scoring rubric ready
- [ ] I know 3-4 "must talk to" people from advance research
- [ ] I'm prepared to say "No thanks, good luck" to wrong fit

---

**Generated**: Feb 20, 2026  
**For**: OpenClaw Unhackathon Asunción (Feb 28, 2026)  
**Purpose**: Deep talent scouting and team building
