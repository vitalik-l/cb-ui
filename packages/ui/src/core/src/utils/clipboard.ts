/* taken from https://stackoverflow.com/a/30810322 */
const fallbackCopyTextToClipboard = async (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  } catch (err) {
    document.body.removeChild(textArea);
    throw new Error('copy failed');
  }
};

export const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    return await fallbackCopyTextToClipboard(text);
  }
  return await navigator.clipboard.writeText(text);
};
