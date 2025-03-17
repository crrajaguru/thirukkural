import details from './data/detail.json';
import thirukkural from './data/thirukkural.json';

type Chapter = {
    name: string;
    translation: string;
    transliteration: string;
    number: number;
    start: number;
    end: number;
};

type ChapterGroup = {
    name: string;
    transliteration: string;
    translation: string;
    number: number;
    chapters: {
        tamil: string;
        detail: Chapter[];
    };
};

type Section = {
    name: string;
    transliteration: string;
    translation: string;
    number: number;
    chapterGroup: {
        tamil: string;
        detail: ChapterGroup[];
    };
};

type ThirukkuralData = {
    tamil: string;
    section: {
        tamil: string;
        detail: Section[];
    };
}[];

type Kural = {
    Number: number;
    Line1: string;
    Line2: string;
    Translation: string;
    mv: string;
    sp: string;
    mk: string;
    explanation: string;
    couplet: string;
    transliteration1: string;
    transliteration2: string;
};

// Ensure TypeScript understands `details` structure
const thirukkuralData: ThirukkuralData = details;
const kurals: Kural[] = thirukkural.kural;
/**
 * Get all section names.
 * @returns {string[]} - List of section names.
 */
export const getSections = () => {
    return thirukkuralData[0].section.detail.map((section: Section) => section.name);
};

/**
 * Get chapter groups based on section number.
 * @param {number} sectionNumber - Section number.
 * @returns {string[]} - List of chapter group names.
 */
export const getChapterGroups = (sectionNumber: number) => {
    const section = thirukkuralData[0].section.detail.find((s: Section) => s.number === sectionNumber);
    return section ? section.chapterGroup.detail.map((cg: ChapterGroup) => cg.name) : [];
};

/**
 * Get chapters based on chapter group number.
 * @param {number} chapterGroupNumber - Chapter group number.
 * @returns {string[]} - List of chapter names.
 */
export const getChapters = (chapterGroupNumber: number) => {
    for (const section of thirukkuralData[0].section.detail) {
        const chapterGroup = section.chapterGroup.detail.find((cg: ChapterGroup) => cg.number === chapterGroupNumber);
        if (chapterGroup) {
            return chapterGroup.chapters.detail.map((chapter: Chapter) => chapter.name);
        }
    }
    return [];
};

/**
 * Get all chapter groups.
 * @returns {string[]} - List of all chapter group names.
 */
export const getAllChapterGroups = () => {
    return thirukkuralData[0].section.detail.flatMap((section: Section) =>
        section.chapterGroup.detail.map((cg: ChapterGroup) => cg.name)
    );
};

/**
 * Get all chapters.
 * @returns {string[]} - List of all chapter names.
 */
export const getAllChapters = () => {
    return thirukkuralData[0].section.detail.flatMap((section: Section) =>
        section.chapterGroup.detail.flatMap((cg: ChapterGroup) =>
            cg.chapters.detail.map((chapter: Chapter) => chapter.name)
        )
    );
};

/**
 * Get Kural by chapter number.
 * @param {number} chapterNumber - Chapter number.
 * @returns {Kural[]} - List of Kurals in the chapter.
 */
export const getKuralByChapter = (chapterNumber: number): Kural[] => {
    const chapter = thirukkuralData[0].section.detail
        .flatMap((section) => section.chapterGroup.detail)
        .flatMap((chapterGroup) => chapterGroup.chapters.detail)
        .find((ch) => ch.number === chapterNumber);

    return chapter ? kurals.slice(chapter.start - 1, chapter.end) : [];
};

/**
 * Get Kural by number.
 * @param {number} songNumber - Kural number.
 * @returns {Kural | undefined} - The matching Kural.
 */
export const getSongByNumber = (songNumber: number): Kural | undefined => {
    return kurals.find((kural) => kural.Number === songNumber);
};

/**
 * Search for Kurals by matching words in Line1 and Line2.
 * @param {string} query - The search query (one or more words).
 * @returns {Kural[]} - List of matching Kurals.
 */
export const kuralSearch = (query: string): Kural[] => {
    if (!query.trim()) return [];

    const words = query.split(/\s+/); // Split query into words
    return kurals.filter((kural) =>
        words.some((word) => kural.Line1.includes(word) || kural.Line2.includes(word))
    );
};
