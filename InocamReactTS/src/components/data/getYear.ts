interface NotificationArr {
  purchase: number[];
  approve: number[];
  cancel: number[];
}

interface NotificationNum {
  purchase: number;
  approve: number;
  cancel: number;
}

interface Gender {
  gender: { byGender: number[]; ratio: number[] };
}

interface Age {
  age: { byAge: number[]; ratio: number[] };
}

interface PurchasesGet extends NotificationArr, Gender, Age { }

interface PurchasesGetData {
  total: PurchasesGet;
  model1: PurchasesGet;
  model2: PurchasesGet;
}

interface PurchasesPreData {
  total: NotificationNum;
  model1: NotificationNum;
  model2: NotificationNum;
}

export interface PurchasesChartYear extends PurchasesGetData {
  preYear: PurchasesPreData;
}

export interface PurchasesChartMonth extends PurchasesGetData {
  preMonth: PurchasesPreData;
}

export interface PurchasesChartWeek extends PurchasesGetData {
  preWeek: PurchasesPreData;
}


export const purchasesChartYearData: PurchasesChartYear = {
  total: {
    purchase: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    approve: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    cancel: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

    //["male", "female", "company", "unknown"]
    gender: {
      byGender: [30, 30, 30, 30],
      ratio: [25, 25, 25, 25],
    },

    //[”Tens ~ Twenties”, … “OverEighties”]
    age: {
      byAge: [20, 20, 20, 20, 20, 10, 10],
      ratio: [16.8, 16.8, 16.8, 16.8, 16.8, 8, 8],
    },
  },

  // (1-2) getYear에 대한 model1 데이터
  model1: {
    purchase: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    approve: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    cancel: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],

    //["male", "female", "company", "unknown"]
    gender: {
      byGender: [30, 30, 30, 30],
      ratio: [25, 25, 25, 25],
    },

    //[”Tens ~ Twenties”, … “OverEighties”]
    age: {
      byAge: [20, 20, 20, 20, 20, 10, 10],
      ratio: [16.8, 16.8, 16.8, 16.8, 16.8, 8, 8],
    },
  },

  // (1-3) getYear에 대한 model2 데이터
  model2: {
    purchase: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
    approve: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    cancel: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],

    //["male", "female", "company", "unknown"]
    gender: {
      byGender: [30, 30, 30, 30],
      ratio: [25, 25, 25, 25],
    },

    //[”Tens ~ Twenties”, … “OverEighties”]
    age: {
      byAge: [20, 20, 20, 20, 20, 10, 10],
      ratio: [16.8, 16.8, 16.8, 16.8, 16.8, 8, 8],
    },
  },

  // (2) getYear에 대한 preYear 객체
  preYear: {
    // (2-1) preYear의 total 데이터
    total: {
      purchase: 40,
      approve: 36,
      cancel: 4,
    },
    // (2-2) preYear의 model1 데이터
    model1: {
      purchase: 20,
      approve: 18,
      cancel: 2,
    },
    // (2-3) preYear의 model2 데이터
    model2: {
      purchase: 20,
      approve: 19,
      cancel: 1,
    },
  },
};

export const purchasesChartMonthData: PurchasesChartMonth = {
  total: {
    purchase: [12, 12, 12, 12],
    approve: [10, 10, 10, 10],
    cancel: [2, 2, 2, 2],

    // 출고기준 :: 성별
    gender: {
      byGender: [10, 10, 10, 10],
      ratio: [25, 25, 25, 25],
    },

    // 출고기준 :: 연령별
    age: {
      byAge: [10, 5, 5, 5, 5, 5, 5],
      ratio: [25, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
    },

  },

  model1: {
    purchase: [5, 5, 5, 5],
    approve: [4, 4, 4, 4],
    cancel: [1, 1, 1, 1],

    // 출고기준 :: 성별
    gender: {
      byGender: [5, 5, 5, 5],
      ratio: [25, 25, 25, 25],
    },

    // 출고기준 :: 연령별
    age: {
      byAge: [3, 3, 3, 3, 3, 3, 2],
      ratio: [15, 15, 15, 15, 15, 15, 10],
    },
  },

  model2: {
    purchase: [5, 5, 5, 5],
    approve: [4, 4, 4, 4],
    cancel: [1, 1, 1, 1],

    // 출고기준 :: 성별
    gender: {
      byGender: [5, 5, 5, 5],
      ratio: [25, 25, 25, 25],
    },

    // 출고기준 :: 연령별
    age: {
      byAge: [3, 3, 3, 3, 3, 3, 2],
      ratio: [15, 15, 15, 15, 15, 15, 10],
    },
  },


  // (2) getMonth에 대한 preMonth 객체
  preMonth: {
    // (2-1) preMonth total 데이터
    total: {
      purchase: 50,
      approve: 46,
      cancel: 4,
    },
    // (2-2) preMonth의 model1 데이터
    model1: {
      purchase: 30,
      approve: 28,
      cancel: 2,
    },
    // (2-3) preMonth의 model2 데이터
    model2: {
      purchase: 20,
      approve: 18,
      cancel: 2,
    },
  },
}
