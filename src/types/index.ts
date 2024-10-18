export interface Item {
    id: string;
    name: string;
    data?: {
      [key: string]: any;
      price?: number;
    };
  }
  