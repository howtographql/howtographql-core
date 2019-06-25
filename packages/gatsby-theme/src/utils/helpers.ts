export function optionalChaining(func: Function) {
  try {
    return func();
  } catch (e) {
    return undefined;
  }
}

export const percent = (numberofChapters, currentChapter) =>
  currentChapter ? Math.round((currentChapter / numberofChapters) * 100) : 0;
