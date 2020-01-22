export interface Kiosks {
      id: string;
      title: string;
      currency: string;
      address: {
        en: string,
        ru: string,
      };
      hours: {
        from: number,
        to: number
      };
      loc: [
        number,
        number
      ];
      imageURL: string;
}
