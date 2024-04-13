import { DonutChart, Legend, BarChart } from '@tremor/react';

const damage = [
  {
    "name": "Magicbeast",
    "dps": 7247,
  },
  {
    "name": "Sygnis",
    "dps": 4580,

  },
  {
    "name": "Eltororeloco",

    "dps": 2547
  },
  {
    "name": "Corydosia",

    "dps": 3584
  },
  {
    "name": "Chicacombo",
    "dps": 5437
  },
  {
    "name": "Gnomanao",

    "dps": 4571
  }

]
const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

const DonutChartHero = () => (
  <div className='mx-auto mt-6'>

    <DonutChart
      data={damage}
      variant="donut"
      category={'dps'}
      valueFormatter={dataFormatter}
      onValueChange={(v) => console.log(v)}
      label='DPS TURTLE'
      colors={['blue', 'stone', 'orange', 'pink', 'yellow', 'green']}
    />
    <div className='mx-auto mt-8 place-items-center grid'>
      <Legend
        categories={['Mage', 'Warrior', "Druid", "Paladin", "Rogue", "Hunter"]}
        colors={['blue', 'stone', 'orange', 'pink', 'yellow', 'green']}
        className="max-w-xs"
      />



    </div>
    <div className='w-96 h-96 mt-12 mx-auto '>
      <BarChart
        data={damage}
        index="name"
        categories={['dps']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        onValueChange={(v) => console.log(v)}
      />


    </div>





  </div>
);

export default DonutChartHero