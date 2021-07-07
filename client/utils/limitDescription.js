const limitDescription = (description) => {
  if (!description) {
    return '';
  } else if (description.length > 300) {
    return `${description.slice(0, 295)} ...`;
  }
  return description;
}

export default limitDescription;
