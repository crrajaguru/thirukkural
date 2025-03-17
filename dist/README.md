# Thirukkural Lookup

Thirukkural Lookup is a TypeScript library designed to facilitate easy access and retrieval of verses from the Thirukkural, a classic Tamil text renowned for its universal teachings on ethics and morality.

## About Thirukkural

The Thirukkural, authored by the ancient Tamil poet Thiruvalluvar, comprises 1,330 couplets (kurals) that provide timeless insights into various aspects of life. These couplets are organized into 133 chapters, each containing 10 kurals, and are further grouped into three primary sections:

1. **Aram (Virtue)**: Focuses on moral values and ethical living.
2. **Porul (Wealth)**: Deals with statecraft and socio-economic matters.
3. **Inbam (Love)**: Explores love and interpersonal relationships.

This structure ensures comprehensive coverage of both individual conduct and societal norms.

## Installation

To incorporate Thirukkural Lookup into your project, install it via npm:

```bash
npm install @crrajaguru/thirukkural
```

## Usage

First, import the necessary functions from the library:

```typescript
import {
    getSections,
    getChapterGroups,
    getChapters,
    getAllChapterGroups,
    getAllChapters,
    getKuralByChapter,
    getSongByNumber
} from '@crrajaguru/thirukkural';
```

### Functions

1. **`getSections()`**: Retrieves all section names.

   ```typescript
   const sections = getSections();
   console.log(sections);
   // Output: ['Aram', 'Porul', 'Inbam']
   ```

2. **`getChapterGroups(sectionNumber: number)`**: Fetches chapter groups within a specified section.

   ```typescript
   const chapterGroups = getChapterGroups(1); // For 'Aram' section
   console.log(chapterGroups);
   ```

3. **`getChapters(chapterGroupNumber: number)`**: Retrieves chapters within a specified chapter group.

   ```typescript
   const chapters = getChapters(1); // Assuming chapter group 1 exists
   console.log(chapters);
   ```

4. **`getAllChapterGroups()`**: Returns all chapter groups across sections.

   ```typescript
   const allChapterGroups = getAllChapterGroups();
   console.log(allChapterGroups);
   ```

5. **`getAllChapters()`**: Fetches all chapters across all sections and groups.

   ```typescript
   const allChapters = getAllChapters();
   console.log(allChapters);
   ```

6. **`getKuralByChapter(chapterNumber: number)`**: Retrieves all kurals within a specified chapter.

   ```typescript
   const kurals = getKuralByChapter(1); // For chapter 1
   console.log(kurals);
   ```

7. **`getSongByNumber(songNumber: number)`**: Fetches a specific kural by its number.

   ```typescript
   const kural = getSongByNumber(1); // For kural number 1
   console.log(kural);
   ```

8. **`kuralSearch(query: string)`**: The search query (one or more words)..

   ```typescript
   const kurals = kuralSearch('உலகு'); // For kural have word 'உலகு' in it
   console.log(kurals);
   ```

## Data Source

The kural data utilized in this library is sourced from the [thirukkural](https://github.com/tk120404/thirukkural) repository. We extend our gratitude to the contributors for making this valuable resource available.

## Source Code

The source code for this npm package is available at [GitHub](https://github.com/crrajaguru/thirukkural).

## License

This project is licensed under the MIT License.

