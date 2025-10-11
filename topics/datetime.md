# 🕒 Node.js Date & Time Practice Topics

A comprehensive list of common datetime issues to practice in Node.js.

---

## 🔹 Time Zones

- Convert between **UTC** and local time.
- Handle users in **multiple time zones**.
- Schedule tasks across time zones (e.g., cron jobs).
- Manage **Daylight Saving Time (DST)** changes.
- Decide between storing dates in DB as **UTC vs local**.

---

## 🔹 Formats & Parsing

- Parse different input formats (`YYYY-MM-DD`, `MM/DD/YYYY`, ISO 8601, custom).
- Serialize dates to JSON (`Date.toISOString()` vs `.toString()`).
- Format dates for display (`Intl.DateTimeFormat`, `date-fns`, `luxon`, `dayjs`).
- Handle ambiguous dates (`03/04/2025` → March 4 or April 3?).

---

## 🔹 Arithmetic & Calculations

- Add/subtract days, months, years (**end-of-month issues**, leap years).
- Calculate differences between two dates (days, weeks, months).
- Compute **age** correctly (avoid off-by-one).
- Round times (ceil/floor to nearest minute/hour/day).

---

## 🔹 Edge Cases

- **Leap years**: `2024-02-29` exists, `2023-02-29` doesn’t.
- **Leap seconds** (rare, but possible).
- Different month lengths.
- Crossing **midnight** when adding/subtracting hours.
- Negative timestamps (dates before 1970).

---

## 🔹 Storage & Databases

- MySQL/Postgres store `DATETIME` differently (with/without timezone).
- MongoDB stores dates in **UTC**.
- Convert between DB formats and JS `Date`.
- Handle **milliseconds vs seconds** (`Date.now()` vs Unix epoch).

---

## 🔹 Localization & Internationalization (i18n)

- Translate month/day names (`January` → `Tháng 1`).
- Localized formatting (`DD/MM/YYYY` vs `MM/DD/YYYY`).
- Right-to-left calendars (Arabic/Hebrew).
- First day of week differences (**Sunday vs Monday**).

---

## 🔹 Performance & Libraries

- Limitations of native JS `Date` (system timezone bound).
- Choosing libraries:
  - `moment.js` (legacy)
  - `date-fns`
  - `luxon`
  - `dayjs`
- Avoid heavy libs for simple formatting.
- Optimize large date computations.

---

## 🔹 Real-World Practice Scenarios

1. Convert timestamps from **UTC → Asia/Ho_Chi_Minh** and display in Vietnamese format.
2. Schedule a task every **Monday at 9AM local time** across multiple time zones.
3. Parse user input safely (`03/04/25`) → resolve ambiguity.
4. Calculate **exact age** (years, months, days).
5. Find number of **weekdays** between two dates.
6. Store `createdAt` in **MongoDB UTC**, display in user’s timezone.
7. Handle a **birthday on Feb 29** and find next valid year.
8. Format the same date in multiple locales (`en-US`, `fr-FR`, `vi-VN`).
9. Round a timestamp to the **nearest 15 minutes**.
10. Detect if a given time falls in a **DST transition**.

---
