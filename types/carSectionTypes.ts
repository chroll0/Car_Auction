export type InformationProps = {
  id: number;
  price: number;
  mileage: number;
  current: boolean;
  carName: string;
  lotNumber: string;
  startTime: string;
  endTime: string;
  imgURL: string;
  brand: string;
  condition: string;
  fuelType: string;
  transmission: string;
  drivetrain: string;
  bodyStyle: string;
  exteriorColor: string;
  interiorColor: string;
  seatingCapacity: number;
  engine: string;
  horsepower: number;
  torque: number;
  doors: number;
  topSpeed: string;
  acceleration: string;
  year: string;
  location: string;
  VIN: string;
  previousOwners: number;
  warranty: string;
  features: string[];
  safetyRatings: {
    NHTSA: number;
    IIHS: string;
  };
  auctionDetails: {
    reserveMet: boolean;
    startingBid: number;
    bidIncrement: number;
  };
};

export interface AvailableCarsProps {
  title: string;
  isCurrent: boolean;
}

export type CountdownTimerProps = {
  targetDate: string;
};

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
