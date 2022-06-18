

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const food_color = {'#9AC740': 'Whole Food',
                            '#FFB440': 'Refreshing',
                            '#FF5140': 'Smoothie',
                            '#FFE740': 'Soup',
                            '#AF895F': 'Tea',
                            '#9085D9': 'Frozen Treat',
                            '#D8D8D8': 'No Activity'};

const fake_data = [['Whole Food', 'Smoothie'],
                  ['Smoothie'],
                  ['No Activity'],
                  ['Tea'],
                  ['Tea', 'Soup', 'Frozen Treat', 'Smoothie'],
                  ['Frozen Treat'],
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
                  ['Frozen Treat'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['Frozen Treat', 'Tea', 'Whole Food'],
                  ['Tea', 'Soup'],
                  ['No Activity'],
                  ['Frozen Treat', 'Tea'],
                  ['Smoothie'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ['No Activity'],
                  ];


export const daysInMonth = () => {
  let dt = new Date('21-may-2022');
  let dt_check = new Date('21-may-2022');
  let today = new Date();
  // let newDT = new Date('23-jun-2022');

  dt_check = new Date(dt_check.getTime() + (1000 * 60 * 60 * 24 * 29));

  // newDT = new Date(newDT.getTime() + (1000 * 60 * 60 * 24 * 1));
  // newDT = new Date(newDT.getTime() - (1000 * 60 * 60 * 24 * 30));
  
  const days = [];  

  if(dt_check.getTime() <= today.getTime()) {
    console.log('Hello');

    for (let i=0; dt.getTime() <= new Date(today.getTime() + (1000 * 60 * 60 * 24 * 1)); i++) {
      if(dt.getTime() <= today.getTime()) {
        days.push([dt, dt.getDate(), week[dt.getDay()], fake_data[i]]);
      } else {
        days.push([dt, dt.getDate(), week[dt.getDay()]]);
      }
      dt = new Date(dt.getTime() + (1000 * 60 * 60 * 24));
      }

      return days.slice(-30);
  } else {
    for (let i=0; i <= 29; i++) {
      if(dt.getTime() <= today.getTime()) {
        days.push([dt, dt.getDate(), week[dt.getDay()], fake_data[i]]);
      } else {
        days.push([dt, dt.getDate(), week[dt.getDay()]]);
      }
      dt = new Date(dt.getTime() + (1000 * 60 * 60 * 24));
      }
    
    return days;
  }




  // for (let i=0; i <= 29; i++) {
  //   if(dt_check.getTime() < today.getTime()) {
  //     console.log('Hello');



  //   if(newDT.getTime() < today.getTime()) {
  //     days.push([newDT, newDT.getDate(), week[newDT.getDay()], fake_data[i]]);
  //   } else {
  //     days.push([newDT, newDT.getDate(), week[newDT.getDay()]]);
  //   }
  //   newDT = new Date(newDT.getTime() + (1000 * 60 * 60 * 24));



  //   } else {
  //     if(dt.getTime() < today.getTime()) {
  //     days.push([dt, dt.getDate(), week[dt.getDay()], fake_data[i]]);
  //   } else {
  //     days.push([dt, dt.getDate(), week[dt.getDay()]]);
  //   }
  //   dt = new Date(dt.getTime() + (1000 * 60 * 60 * 24));
  // }
  // }


  // return days;
}