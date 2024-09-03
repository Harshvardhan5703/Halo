'use client'

import { formatAmount } from '@/lib/utils';
import CountUp from 'react-countup';

const formatIndianNumber = (number: { toString: () => string; }) => {
    let numStr = number.toString().split('.')[0];
    let lastThree = numStr.slice(-3);
    let otherNumbers = numStr.slice(0, -3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    if (number.toString().includes('.')) {
        result += '.' + number.toString().split('.')[1];
    }
    return result;
};

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
      <CountUp 
      duration={2}
      decimals={2}
      decimal='.'
      prefix='₹' 
      end={amount}
      formattingFn={formatAmount} />
    </div>
  )
}

export default AnimatedCounter;
