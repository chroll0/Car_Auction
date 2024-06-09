export type CarCardProps = {
  price: string;
  current: boolean;
  carName: string;
  lotNumber: string;
  endTime: string;
  startTime: string;
  imgURL: string;
};

export type CountdownTimerProps = {
  targetDate: string;
};

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
