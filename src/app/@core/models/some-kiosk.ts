export interface SomeKiosk {
  id: string;
  title: string;
  currency: string;
  address: {
    en: string;
    ru: string;
  };
  hours: {
    from: number;
    to: number;
  };
  loc: [
    number,
    number
  ];
  imageURL: string;
  items: [
    {
      category: {
        _id: string;
        title: string;
        order: number;
      },
      products: [
        {
          id: string;
          title: string;
          description: string;
          imageURL: string;
          price: number;
          count: string;
        },
      ]
    },
  ];
}
