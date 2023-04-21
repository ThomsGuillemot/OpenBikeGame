# OpenBikeGame
You want to Gold Race ! Here is an Angular App and some ressources to start !

# Next Features : v0.1.0
Planned Features for the version 0.1.0
- Create an **Event**
  - Name
  - Date
- Create a **Race** in an Event
  - Name
  - Date
  - Type
  - Score (Time / Distance)
  - Leaderboard
- Create a **Rider**
  - Name
  - Contact
- Add a **Rider** in a **Race**
- Start a **Race**
- Start a **Sprint**
  - Rider
  - Result (Time / Distance)
- Display a **Race**
- Display the **Race Leaderboard**
- Connect to an Arduino
- Provide the code for the Arduino

# Structures for saving/loading data :
## Rider :
```json
{
  name : "",
  contact : ""
}
```

## Race
```json
{
  name : "",
  date : "",
  type : "",
  parameters : {},
  score : 0.0,
  leaderboard : [ {rider} ]
}
```

## Event
```json
{
  name : "",
  startDate : "",
  endDate : "",
  races : [ {race} ]
```
