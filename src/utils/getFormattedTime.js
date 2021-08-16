import getKST from './getKST';
import MONTHS from 'constants/months';
import WEEK from 'constants/week';

const getFormattedTime = {
  today: getKST(),
  KO() {
    return `${this.today.year}년 ${this.today.month + 1}월 ${
      this.today.date
    }일 ${WEEK['KO'][this.today.day]}`;
  },
  EN() {
    return `${WEEK['EN'][this.today.day]} ${MONTHS[this.today.month]} ${
      this.today.date
    }, ${this.today.year}`;
  },
};
export default getFormattedTime;
