import { papagoInstance } from './instance';

async function detectLanguage(query: string) {
  return papagoInstance.post('/detectLangs', { query });
}

async function translate(source: string, target:string, text: string) {
  return papagoInstance.post('/n2mt', {
    source,
    target,
    text,
  });
}

export async function translateContent(text: string, target: string) {
  const detectResponse = await detectLanguage(text);

  const translateResponse = await translate(detectResponse.data.langCode, target, text);

  return translateResponse;
}
