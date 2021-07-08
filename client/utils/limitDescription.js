const limitDescription = (description) => {
  if (!description) {
    return '';
  } else if (description.length > 250) {
    return `${description.slice(0, 245)} ...`;
  }
  return description;
}

export default limitDescription;
