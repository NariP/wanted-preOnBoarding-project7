const getKST = () => {
  const currentTime = new Date();

  const UTC =
    currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000;

  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const KST = new Date(UTC + KR_TIME_DIFF);
  return {
    year: KST.getFullYear(),
    month: KST.getMonth(),
    date: KST.getDate(),
    day: KST.getDay(),
  };
};

export default getKST;