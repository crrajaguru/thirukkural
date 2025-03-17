# Thirukkural Lookup

Thirukkural Lookup is a TypeScript library that provides easy access to the Thirukkural, a renowned Tamil literary work containing 1,330 couplets (kurals) offering wisdom on ethics, governance, and love.

## About Thirukkural

The **Thirukkural**, written by **Thiruvalluvar**, is a classical Tamil text divided into three sections:

1. **Aram (Virtue)** – Focuses on ethics and righteousness.
2. **Porul (Wealth)** – Covers statecraft and governance.
3. **Inbam (Love)** – Discusses love and relationships.

Each section consists of chapters, with each chapter containing 10 kurals.

## Features

- Retrieve sections, chapter groups, and chapters
- Fetch kurals by chapter number
- Lookup a kural by its number
- Easy-to-use API with TypeScript support

## Installation

Install the package using npm:

```bash
npm install @crrajaguru/thirukkural
```

## Usage

Import the required functions:

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

### Example Usage

#### Get all sections
```typescript
const sections = getSections();
console.log(sections);
```

#### Get chapter groups by section number
```typescript
const chapterGroups = getChapterGroups(1); // For 'Aram'
console.log(chapterGroups);
```

#### Get all kurals from a chapter
```typescript
const kurals = getKuralByChapter(1);
console.log(kurals);
```

#### Get a kural by its number
```typescript
const kural = getSongByNumber(1);
console.log(kural);
```

#### Get a kural by its words
```typescript
const kurals = kuralSearch('உலகு');
console.log(kurals);
```

## Data Source

The kural data is sourced from the [thirukkural](https://github.com/tk120404/thirukkural) repository.

## Repository

The source code for this package is hosted on [GitHub](https://github.com/crrajaguru/thirukkural).

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

