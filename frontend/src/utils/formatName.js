export function formatName(name) {
  if (name) return name[0].toUpperCase() + name.slice(1) + "s";
}

export function capitaliseFirstLetter(name) {
  if (name) return name[0].toUpperCase() + name.slice(1);
}