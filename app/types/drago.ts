export interface DragoLair {
  status: number;
  joinDate: Date;
  lairId: string;
  leaveDate?: Date;
}

export interface DragoRentStats {
  currentDSA: number;
  currentGathering: number;
  currentProfit: number;
  totalRental: number;
  totalDSA: number;
  totalGathering: number;
  totalProfit: number;
  unclaimedProfit: number;
}

export interface DragoRent {
  status: number;
  expireDate: Date;
  from: string;
  profitShareRatio: number;
  startDate: Date;
  stats: DragoRentStats;
  to: string;
}

export interface DragoParents {
  0: number;
  1: number;
}

export interface DragoFilter {
  genesis: boolean;
  heart: number;
  parts: {
    aqua: number;
    dark: number;
    fire: number;
    legendary: number;
    light: number;
    terra: number;
  };
}

export interface DragoInfo {
  _id: number;
  lair: DragoLair;
  rent: DragoRent;
  network: number;
  status: number;
  breed: number;
  fusion: number;
  block: number;
  parents: DragoParents;
  level: number;
  xp: number;
  tokenId: number;
  owner: string;
  grade: number;
  dragoImageURL: string;
  stats: DragoRentStats;
  filter: DragoFilter;
}
