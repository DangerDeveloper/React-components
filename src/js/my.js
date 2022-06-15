

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
                  ['Tea', 'Soup'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['Frozen Treat', 'Tea'],
                  ['No Activity'],
                  ];


export const daysInMonth = () => {
  let dt = new Date('23-may-2022');
  
  const days = [];
  for (let i=0; i <= 29; i++) {
    if(dt.getTime() < new Date().getTime()) {
      days.push([dt, dt.getDate(), week[dt.getDay()], fake_data[i]]);
    } else {
      days.push([dt, dt.getDate(), week[dt.getDay()]]);
    }
    dt = new Date(dt.getTime() + (1000 * 60 * 60 * 24));
  }
  return days;
}