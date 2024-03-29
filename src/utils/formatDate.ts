export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
]


export const getDateAndTime = (timestamp: string | Date) => {
    const date = new Date(`${timestamp}`);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();


    const time = new Date(`${timestamp}`).toLocaleTimeString()


    if (month && day && year && time) {
        return `${month} ${day}, ${year}. ${time.substring(-2, time.length - 3)}`;
    }

    return 'N/A'
};

export const getDate = (timestamp: string | Date) => {
    const date = new Date(`${timestamp}`);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    if (month && day && year)
        return `${day} ${month} ${year}`;

    return 'N/A'
};

export const getTime = () => {

}