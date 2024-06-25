export type CarCardProps = {
  price: number;
  mileage: number;
  current: boolean;
  carName: string;
  lotNumber: string;
  endTime: string;
  startTime: string;
  imgURL: string;
  brand: string;
  condition: string;
  type: string;
  year: number;
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
