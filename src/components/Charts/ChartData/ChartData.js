//Whole data for the marketing page. Data organized this way due to rechart's limitation on how it reads the data.
export const ChartData = [
  {
    campaign: [
      {
        codename: 'campaign1',
        name: '2021 SEO Ads',
      },
      {
        codename: 'campaign2',
        name: '2021 Influencer Campaign',
      },
      {
        codename: 'campaign3',
        name: '2021 Winter Promotion',
      },
      {
        codename: 'campaign4',
        name: '2020 Facebook Ads',
      },
    ],
    lineData: [
      {
        xAxis: 'Mar 13',
        campaign1: 90,
        campaign2: 110,
        campaign3: 67,
        campaign4: 103,
      },
      {
        xAxis: 'Mar 14',
        campaign1: 120,
        campaign2: 132,
        campaign3: 102,
        campaign4: 224,
      },
      {
        xAxis: 'Mar 15',
        campaign1: 134,
        campaign2: 149,
        campaign3: 129,
        campaign4: 245,
      },
      {
        xAxis: 'Mar 16',
        campaign1: 200,
        campaign2: 207,
        campaign3: 189,
        campaign4: 194,
      },
      {
        xAxis: 'Mar 17',
        campaign1: 231,
        campaign2: 240,
        campaign3: 223,
        campaign4: 200,
      },
      {
        xAxis: 'Mar 18',
        campaign1: 284,
        campaign2: 302,
        campaign3: 245,
        campaign4: 230,
      },
      {
        xAxis: 'Mar 19',
        campaign1: 314,
        campaign2: 262,
        campaign3: 340,
        campaign4: 252,
      },
    ],
    clicks: [
      {
        campaign: 'campaign1',
        twitter: 23,
        facebook: 30,
        googleAds: 41,
      },
      {
        campaign: 'campaign2',
        twitter: 15,
        facebook: 45,
        googleAds: 34,
      },
      {
        campaign: 'campaign3',
        twitter: 21,
        facebook: 23,
        googleAds: 19,
      },
      {
        campaign: 'campaign4',
        twitter: 10,
        facebook: 68,
        googleAds: 7,
      },
    ],
    revenue: [
      {
        campaign: 'campaign1',
        twitter: 1000,
        facebook: 10000,
        googleAds: 3500,
      },
      {
        campaign: 'campaign2',
        twitter: 4659,
        facebook: 12000,
        googleAds: 5732,
      },
      {
        campaign: 'campaign3',
        twitter: 789,
        facebook: 4658,
        googleAds: 2380,
      },
      {
        campaign: 'campaign4',
        twitter: 2045,
        facebook: 14067,
        googleAds: 1294,
      },
    ],
  },
];