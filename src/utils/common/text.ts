export const hasTags = (html: string) =>
  /<[^>]+>/.test(
    html.replace(/<br>/gi, '').replace(/^<(\w+)>([\s\S]*)<\/\1>$/, '$2')
  );

export const hasOnlyEmptyText = (html: string) =>
  typeof html === 'string' && html.replace(/<[^>]+>/g, '').trim().length === 0;
