import details from './data/detail.json';

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

// Ensure TypeScript understands `details` structure
const thirukkuralData: ThirukkuralData = details;

/**
 * Get all section names
 */
export const getSections = () => {
    return thirukkuralData[0].section.detail.map((section: Section) => section.name);
};

/**
 * Get chapter groups based on section number
 */
export const getChapterGroups = (sectionNumber: number) => {
    const section = thirukkuralData[0].section.detail.find((s: Section) => s.number === sectionNumber);
    return section ? section.chapterGroup.detail.map((cg: ChapterGroup) => cg.name) : [];
};

/**
 * Get chapters based on chapter group number
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
 * Get all chapter groups
 */
export const getAllChapterGroups = () => {
    return thirukkuralData[0].section.detail.flatMap((section: Section) =>
        section.chapterGroup.detail.map((cg: ChapterGroup) => cg.name)
    );
};

/**
 * Get all chapters
 */
export const getAllChapters = () => {
    return thirukkuralData[0].section.detail.flatMap((section: Section) =>
        section.chapterGroup.detail.flatMap((cg: ChapterGroup) =>
            cg.chapters.detail.map((chapter: Chapter) => chapter.name)
        )
    );
};
