---
title: AddnAide Private Pay Pilot
description: >-
  Over three weeks, I ran discovery for AddnAide's private-pay pilot and then
  built it as a working demo. The product owner left with a signed scope, an
  estimate read from the code, and 17 screens that match the story cards the
  estimate was built from.
problem: >-
  AddnAide was built for publicly funded care, where a care manager sets up the
  plan and a public program pays the caregiver. The pilot added families who
  pay privately. They would sign themselves up, set up care, agree on a rate
  with a caregiver, and get billed, with no care manager involved. The product
  owner needed a scope and an estimate she could defend. On most projects a
  mockup gets approved, a ticket gets written from memory a week later, and an
  estimate gets written from the ticket, and by the time anyone builds it the
  three no longer agree.
role: >-
  I led discovery for the pilot, running daily working sessions with
  AddnAide's product owner and logging every decision before it became a story
  card. From the cards I outlined each screen for the generated HTML
  wireframes and built the estimate by reading the existing codebase. Then I
  built the demo screens in Phoenix LiveView and SCSS alongside the lead
  developer. Claude agents I wrote did the overnight drafting and code review,
  and people kept every decision and every message to the client.
outcome: >-
  The product owner left with a signed statement of work and a scope cut from
  128 mapped stories to 49 committed ones. We made the cut together on the
  story map, card by card, against a rule written before the session, and the
  other 79 stories moved to named later releases. The estimate came to about
  235 hours against a 240-hour implementation budget. We built the 17 working
  screens in five days and demoed them on August 4, three weeks after kickoff.
  The clickable demo became the specification the lead developer is building
  the pilot against now, for an October launch.
cover_image: /assets/images/case-studies/thumbnails/addnaide-private-pay-pilot-thumbnail.png
category: product design
services:
  - name: UI Design
    timeline: 2.5 weeks
    tags:
      - name: Story Mapping
      - name: Stakeholder Interviews
      - name: Decision Log
  - name: Prototyping
    timeline: 2.5 weeks
    tags:
      - name: Claude Agents
      - name: Generated HTML Wireframes
  - name: Web Development
    timeline: 5 days
    tags:
      - name: Phoenix LiveView
      - name: Elixir
      - name: SCSS
testimonial: >-
  AddnAide, from the Council on Aging of Southwest Ohio, helps older adults and
  their families find and hire in-home caregivers, including caregivers paid
  through the Council's programs for older adults.
cite: Council on Aging of Southwest Ohio
icon: "\U0001F3E1"
color: green
tags:
  - name: Healthcare
visible: true
size: large
aspect: wide
solutions:
  - title: generated wireframes
    description: >-
      I outlined every screen in the pilot as what a person sees there and what
      they do, and Claude generated the HTML wireframes from those outlines.
      When a decision moved, I changed the outline and ran it again, which is
      how the set got through nine revisions in eight days. The card numbers
      under each screen tie it back to the story map and the estimate.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-wireframe-index.png
  - title: setup checklist wireframe
    description: >-
      Notes above each wireframe record the decisions behind it. On the
      family's dashboard they settle that a care manager is optional for
      private pay, and that families are never asked to sign off on a
      caregiver's background checks. The product owner and the lead developer
      read the same page, and the card numbers across the top are the ones the
      estimate cites.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-setup-checklist-wireframe.png
  - title: sign up
    description: >-
      New visitors choose between I need care and I provide care, which gives
      private-pay families a front door of their own. A family then answers one
      more question that routes them into private pay, or to support if a
      public program already covers their care.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-sign-up.png
  - title: setup checklist
    description: >-
      Discovery started with an onboarding wizard in mind, and the plan moved
      to a checklist on the family's dashboard. Each item opens its own short
      form and can be done in any order. Once everything is done, the checklist
      disappears and the dashboard is just the dashboard.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-setup-checklist.png
  - title: review progress
    description: >-
      A caregiver passes a program review covering eight background checks
      before any family can find her. Her dashboard shows how far the review
      has come and names her next step, here a fingerprinting visit. Because
      the checks finish first, every caregiver a family sees has already passed
      them.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-review-progress.png
  - title: job offer
    description: >-
      The program sets a minimum and maximum hourly rate, and each family and
      caregiver agree on their own rate within it. A caregiver can accept the
      offer, suggest another rate, or turn it down, with an optional note, and
      her answer shows up as a notification on the family's dashboard.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-job-offer.png
  - title: visit timer
    description: >-
      The program picker on the timer came from the biggest late change in
      discovery. On July 23 we learned that families already enrolled in a
      publicly funded care program can pay privately at the same time, which
      added seven story cards and four wireframes overnight. Now a caregiver
      picks which program each visit counts against, and the hours draw down
      that program's monthly budget.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-visit-timer.png
  - title: invoices
    description: >-
      Program clients never saw a bill, so private pay needed an invoice list.
      The amounts are estimates from logged hours, because the Council's
      billing staff set the actual bill, and the note under the table says so
      in plain words.
    media: /assets/images/case-studies/addnaide-private-pay-pilot-invoices.png
---
