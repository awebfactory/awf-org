# awf-org

> AWebFactory Organization Project Flow & Tracker #BuildInPublic #LearnInPublic open projects platform based on Astro SSR
>
> As `Project Flow and Tracker` the site will soon be self-documenting.
> Meanwhile, see below [The Making of](#awebfactoryorg-project-flow--tracker-the-making-of)

- [ ] Site now self-documenting

- commit

## AWebFactory.org (Project Flow & Tracker). The Making of

- Each project contains any of the items listed below
  - any item may be ommitted
  - any item may include asset attachments
- Attributes
  - `Name`
  - `Short Name`
  - `Description`
  - `Start date`
  - `Finish date` (no deadlines, we do WIP)
- `Legacy inputs`
- Assumptions and `Hypotheses`
- `Business Model Canvas` (BMC)
- `Lean UX Canvas`
- Initial Team meeting, and `Kick-off` conversation and planning
  - `Design System`
  - `Initial Gantt Chart`
  - `Feature List`
  - `Architecture`
  - `Risk List`
- `Iteration`
  - `Start date`
  - `Finish date` (no deadlines, we do WIP)
  - `User Story` List; the iteration user story backlog based on assigned `Feature List` items
    - `Card`, `Conversation`, value delivery `Confirmation`
  - `Kanban Board` (at conversation state, time vaulted (kanban on left/top, conversation on right, bottom))
  - `Gantt Chart` (more for registering initial and iteration planning, together with project history, not for deadlines)
  - `Conversations`
- `Project Value Delivery Confirmation` / Improve, Maintain or Pivot decision
- `Project Post Mortem`
- There may be occasional `Blog Posts` related to the project items: one for each iteration and/or user story. It may optionally include video as attachment.

### Project Attributes

- Name: AWebFactory.org (Project Flow & Tracker)
- Short Name: awf-org
- Description:
- Start date: 2024-02-09
- Finish date (no deadlines, we do WIP)

### Legacy Inputs

### Assumptions and Hypotheses

### Business Model Canvas

```mermaid
block-beta
  columns 1
    db(("DB"))
    blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
    block:ID
      A["ss"]
      B["A wide one\n in the middle"]
      C
    end
    space
    D
    ID --> D
    C --> D
    style B fill:#969,stroke:#333,stroke-width:4px
```

another:

```mermaid
graph TD
      A["one"]
      B["A wide one\n in the middle"]
      C
```

plantuml:

```plantuml
@startuml
!theme crt-amber
Bob -> Alice : hello
@enduml
```

mindmap:

```plantuml
@startmindmap
!theme crt-amber
* Creole on Mindmap
left side
**:==Creole
  This is **bold**
  This is //italics//
  This is ""monospaced""
  This is --stricken-out--
  This is __underlined__
  This is ~~wave-underlined~~
--test Unicode and icons--
  This is <U+221E> long
  This is a <&code> icon
  Use image : <img:http://plantuml.com/logo3.png>
;
**: <b>HTML Creole
  This is <b>bold</b>
  This is <i>italics</i>
  This is <font:monospaced>monospaced</font>
  This is <s>stroked</s>
  This is <u>underlined</u>
  This is <w>waved</w>
  This is <s:green>stroked</s>
  This is <u:red>underlined</u>
  This is <w:#0000FF>waved</w>
-- other examples --
  This is <color:blue>Blue</color>
  This is <back:orange>Orange background</back>
  This is <size:20>big</size>
;
right side
**:==Creole line
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..
Or dotted title
//and title... //
==Title==
Or double-line title
--Another title--
Or single-line title
Enjoy!;
**:==Creole list item
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
;
@endmindmap
```

another:

```mermaid
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter
```

### Lean Ux Canvas

block diagram

### Feature List

table

### Gantt Chart

```mermaid
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d
```

### Design System

### Kanban Board

### Conversations

### Confirmation

- [Repo](https://github.com/awebfactory/awf-org)
- Staging site
- Production site

### Scaffolding the site

- Created 2024-02-09 using my own [Mini Astro 4 Starter](https://github.com/victorkane/mini-astro-4-starter) 2024-02-09
- see initial commits

## Ref (Best Practices)

> Wherever possible I have tried to follow Web Dev Engineering best practices, as exemplified by the following resources (any errors or ommisions my own):

- [Astro Docs](https://docs.astro.build/en/getting-started/)
  - [Astro Docs. SSR Adapters](https://docs.astro.build/en/guides/server-side-rendering/)
  - [Astro Docs. Dynamic Routes (SSG and SSR modes)](https://docs.astro.build/en/guides/routing/)
- [Brad Traversy (Traversy Media) astro-blog ssr example](https://github.com/bradtraversy/astro-blog)
- [Chris Pennington (Coding in Public) YT 2023-08-23 Choosing between SSR, SSG, and dynamic rendering in Astro](video https://youtu.be/aIHRjloFASU?si=_QdqdoTqUnn5dQi8)
- [Kevin Zuniga Cuellar kevinzunigacuellar / astro-supabase example](https://github.com/kevinzunigacuellar/astro-supabase)
