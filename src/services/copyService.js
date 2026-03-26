export async function copyCodeFromButton(button) {
  const pre = button.closest('.code-block')?.querySelector('pre');
  if (!pre) {
    return false;
  }

  await navigator.clipboard.writeText(pre.innerText);
  return true;
}
