export const isCommentAuthor = (author, LoginUser) => {
  // console.log(author, LoginUser);
  return author == LoginUser;
};

export const getDateDifferenceFromNow = (fromDate) => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();

  difference = difference / 1000;

  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  let message;

  if (hourDifference > 0) {
    if (hourDifference > 24) {
      const day = hourDifference / 24;
      const hour = Math.round(day) * 24 - hourDifference;
      // console.log(());
      message = `${Math.round(day)} day ${Math.abs(hour)} hours`;
    }
    // message = `${hourDifference} hour`;
  }

  if (minuteDifference > 0) {
    message = message
      ? `${message} ${minuteDifference} minutes`
      : `${minuteDifference} minutes`;
  }

  if (difference) {
    message = message
      ? `${message} ${Math.round(difference)} seconds`
      : `${Math.round(difference)} seconds`;
  }

  return message;
};

export const stringToObj = (author) => {
  const keyValuePairs = author.slice(1, -1).split(",");
  const authorObject = {};

  // Loop through the key-value pairs and add them to the object
  keyValuePairs.forEach((pair) => {
    const [key, value] = pair
      .trim()
      .split(":")
      .map((item) => item.trim());
    authorObject[key.replace(/'/g, "")] = value.replace(/'/g, "");
  });

  return authorObject;
};

export const baseUrl = () => {
  // return `http://127.0.0.1:8000`;
  // return `https://blogify-backend-vstx.onrender.com`;
  return `https://blogifybackend-production.up.railway.app`;
};
