

export function truncateTitle(title: string): string {
  if (title.length > 70) {
    const words = title.split(' ');
    for (let i = words.length - 1; i >= 0; i--) {
      if (title.slice(0, words.slice(0, i).join(' ').length).length <= 70) {
        return `${words.slice(0, i).join(' ')}...`;
      }
    }
  }
  return title;
}
