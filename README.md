# foxfox-rules

Contain all rule and test proof

## Dev Server

```
npm i -g firebase-tools
cd firebase/function
npm i

npm start
```

## Dev Client

```
cd web
npm i

npm start
```

## To create quest (think it's a folder)

- Capture picture from https://sketchfab.com/3d-models/low-poly-dungeon-game-5afb00f6cda34980a058853a980d3c7d
- Save as `png` with https://pngquant.org/
- Define quest properties in firebase : quests/0000001

```
// quest write
{
  "name": "Prison break",
  "img": "https://foo.bar/baz.png"
}

// quest on update
{
  ...,
  "id": "asdf0",                  // auto gen id
  "monsters": ["ghjk0", "ghjk1"]  // auto fill from monsters
}
```

## To create quiz (think it's a file)

- Select quest
- Select slot index
- Fill all quiz prerequisites scheme

```
// monster write
{
  "index": 0,
  "type": "metalon",
  "tags": ["ds:10", "de:10"],
  "referral": "https://developers.google.com/machine-learning/crash-course/reducing-loss/check-your-understanding",
  "msgs": ["First question just pick one!"],
  "choice": {
    "corrects": [0],
    "checkboxes": ["One", "Two"]
  }
}

// monster on write
monster {
  "id": "ghjk0",                    // auto gen id
  "owner_id": "qwer0",              // owner id
  "tx_id": "poiu0",                 // owner stamp id
  "req_ap": 1,                      // auto fill default to 1
}

quest {
  ...,
  "monsters": ["ghjk0", "ghjk1"]    // auto add/remove monster to quest
}
```

# To release quest

- Run unit-test before add to `firebase`
- Run https://pngquant.org/ to optimize image
- Trigger `firebase` cli for writing to `firestore`
- Run `play` test via `firestore` (all win, all lost, all random)
- Generate release note
- Make PR to `foxfox-play` for blue/green deployment
