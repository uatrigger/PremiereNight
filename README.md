# Premiere Night 
Mobile app for cinematic discovery and watchlist management.

--- 

## Tech Stack & Tools

### Core
- React Native (CLI)
- TypeScript
- React Navigation (Bottom Tabs, Native Stack)
- TanStack Query
- Zustand
- react-native-svg
- react-native-safe-area-context

### Data & APIs
- **The Movie Database (TMDB) API**
- Popular movies
- Now Playing movies
- Movie details
- Genres

### Persistence
- AsyncStorage

### Styling & UI
- Custom design tokens:
- `colors`
- `spacing`
- `typography`

--- 

## Running the App 

### Prerequisites
- Node.js ≥ 18
- npm
- Android Studio / Xcode
- TMDB API key

---

### Environment Setup
Create a `.env` file in the project root:

```bash
TMDB_API_KEY=your_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
```
---

### Install Dependencies
```bash
npm install
```
### Run Metro server
```bash
npm run start
```

### Run on Android
```bash
npm run android
```

### Run on iOS
```bash
cd ios && pod install
cd ..
npm run ios
```
---

### Deeplink open on iOS
```bash
xcrun simctl openurl booted "premierenight://movie/550"
```

### Deeplink open on Android
```bash
adb shell am start  -W -a android.intent.action.VIEW  -d "premierenight://movie/550"  com.premierenight
```

---

## Architectural Decisions
1. Server State vs Client State
    - TanStack Query for server data
    - Zustand is used only for client-owned state

1. Store Hydration
    - Explicit `hydrate()` lifecycle
    - AsyncStorage persistence

1. Feature-Oriented Structure
    - Code is organized by features, not by file type (scalable structure, easier reasoning about changes)
```bash
features/
  movies/
  watchlist/
shared/
  components/
  layouts/
  theme/
```

### Trade-offs & Assumptions
- No offline-first strategy (beyond watchlist persistence)
- No pagination (kept intentionally minimal for the challenge scope)
- UI focused on clarity and motion rather than heavy animation
- Genre data treated as reference metadata and cached aggressively
- Tests not implemented (in TODO)
- Performance optimizations such as `useCallback`, `useMemo`, and `React.memo` were intentionally not applied at this stage. Given the current application size and data volume, the UI maintains a stable FPS and predictable rendering behavior. Premature memoization was avoided to keep the codebase simpler and more readable (in TODO).


