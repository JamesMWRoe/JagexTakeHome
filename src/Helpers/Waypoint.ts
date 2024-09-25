interface Waypoint
{
  symbol: string;
  type: string;
  traits: Array<Traits>;
}

interface Traits
{
  symbol: string;
  name: string;
  description: string;
}

export default Waypoint