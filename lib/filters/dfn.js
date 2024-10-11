export function dfn(string, options) {
  const word = string.replaceAll(/\[|\]/g, "");
  let dfn = `<a href="https://www.wordnik.com/words/${word}">${string}</a>`;

  if (options?.latin) {
    dfn += ` (latin: <em lang="la">${options.latin}</em>)`;
  }

  if (options?.discouraged) {
    dfn = `<del>${dfn}</del>`;
  }

  return dfn;
}
