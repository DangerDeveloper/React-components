

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const food_color = {'#9AC740': 'Whole Food Drink',
                            '#FFB440': 'Refreshing Drink',
                            '#FF5140': 'Smoothie',
                            '#FFE740': 'Soup',
                            '#AF895F': 'Tea',
                            '#9085D9': 'Frozen Treat',
                            '#D8D8D8': 'No Activity'};

const fake_data = [['Whole Food Drink', 'Smoothie'],
                  ['Smoothie'],
                  ['No Activity'],
                  ['Tea'],
                  ['Tea', 'Soup', 'Frozen Treat', 'Smoothie'],
                  ['Frozen Treat'],
                  ['Smoothie'],
                  ['No Activity'],
                  ['Smoothie'],
                  ['Frozen Treat'],
                  ['Smoothie'],
                  ['No Activity'],
                  ['Tea', 'Soup'],
                  ['Smoothie'],
                  ['No Activity'],
                  ['Smoothie', 'Tea'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['Frozen Treat', 'Tea', 'Whole Food Drink'],
                  ['Frozen Treat'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['Frozen Treat', 'Tea'],
                  ['No Activity'],
                  ];

export const daysInMonth = () => {
  const dt = new Date('23-may-2022');
  const month = dt.getMonth();
  const year = dt.getFullYear();
  const day = dt.getDate();
  const date = new Date(year, month, day);
  const days = [];
  for (let i=0; i <= 29; i++) {
    if(date < new Date()) {
      days.push([date.getDate(), week[date.getDay()], fake_data[i]]);
    } else {
      days.push([date.getDate(), week[date.getDay()]]);
    }
    date.setDate(date.getDate() + 1);
  }
  return days;
}