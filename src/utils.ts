const calculateRating = (rating: number): number => {
  const MAX_RATING = 5;

  return (rating * 100) / MAX_RATING;
};

const getCommentDate = (date: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const commentDate = new Date(date);

  return `${months[commentDate.getMonth()]} ${commentDate.getFullYear()}`;
};

const getMachineDate = (date: string) => date.slice(0, date.indexOf('T'));

const capitalizeFirstLetter = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export {
  calculateRating,
  capitalizeFirstLetter,
  getCommentDate,
  getMachineDate,
};
