/**
 * Splits a paragraph into bullet points based on sentences
 * Each sentence becomes a bullet point with proper punctuation
 */
export const processParagraph = (text: string): string[] => {
    const sentences = text.split(/\.(?:\s|$)/).filter(sentence => sentence.trim().length > 0);
    return sentences.map(sentence => sentence.trim() + (sentence.trim().endsWith('.') ? '' : '.'));
};