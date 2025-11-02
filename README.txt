
Acoustic Locator - PWA package for SHTTPS (static server) installation
Files included:
- detector.html  (place on sensor phones)
- receiver.html  (place on receiver phone)
- sw.js
- manifest.webmanifest
- icon-192.png, icon-512.png
- README.txt

How to install:
1) Place all files in a folder served by SHTTPS on your Android device.
2) Open detector.html and receiver.html from devices within the same LAN (http://<host-ip>:<port>/detector.html).
3) On first run each detector generates a unique PIN shown in UI. Copy that PIN into the receiver's table (it will auto-add on first message).
4) To connect detectors to receiver without signaling server: use manual offer/answer flow in receiver -> detectors.
5) For automatic relay, optionally use a simple WebSocket relay server and set its URL in signaling fields.

Notes:
- All events are saved in IndexedDB on detectors and receiver. Detectors auto-send pending events when channel becomes available.
- Receiver supports threshold updates (enter values in table). Config broadcast requires relay or direct DC mesh not fully automated here.
- PWA install: use browser menu "Add to Home screen" on each device after opening pages. Service worker caches assets for offline use.
