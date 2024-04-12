import { DonutChart, Legend } from '@tremor/react';

const damage = [
  {
    "name": "Magicbeast",
    "value": 7247,
  },
  {
    "name": "Sygnis",
    "value": 4580,

  },
  {
    "name": "Eltororeloco",

    "value": 2547
  },
  {
    "name": "Corydosia",

    "value": 3584
  },
  {
    "name": "Chicacombo",

    "value": 5437
  },
  {
    "name": "Gnomanao",

    "value": 4571
  }

]
const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

const DonutChartHero = () => (
  <div className='mx-auto mt-6'>

    <DonutChart
      data={damage}
      variant="donut"
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



  </div>
);

export default DonutChartHero