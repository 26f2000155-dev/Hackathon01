# Meet 2 — P4 Data / Visualization

This folder contains the completed P4 roadmap visualization against the current `roadmap_output.schema.json` and `roadmap_output.sample.json`.

## Roadmap fields rendered

`destination`

For each item in `paths[]`:
- `path_id`
- `title`
- `education.degree`
- `education.branch`
- `timeline`
- `why_it_fits`
- `tradeoffs[]`
- `milestones[]`
  - `phase`
  - `timeframe`
  - `focus`
  - `skills[]`
  - `projects[]`
- `internship_strategy.readiness`
- `internship_strategy.target_roles[]`
- `internship_strategy.preparation[]`
- `internship_strategy.application_stage`

The renderer supports 2 or 3 paths and any number of milestones without hardcoding the current sample.

## Analytics / streak note

The roadmap analytics are derived only from schema fields:
- milestone count by route
- skill appearance frequency across milestone stages

The streak heatmap is seeded demo activity, because a student activity/streak field is not part of `roadmap_output.schema.json`. No such field has been added to the roadmap JSON.

For backend integration, call:

```javascript
window.Meet2P4.renderRoadmap(backendRoadmapObject);
```

The object passed to `renderRoadmap` must be the validated roadmap output matching the team's schema.

## Fields not available in the roadmap schema

The roadmap schema does not contain:
- current skill level / target skill level for a skill-gap chart
- completed-task status
- activity dates / streak history
- roadmap completion percentage
- monthly / weekly / daily objectives

These should not be added to `roadmap_output` by P4. They require separate progress/activity data from the rest of the system if the team decides to integrate them.
