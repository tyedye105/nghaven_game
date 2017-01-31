export class Player {
  constructor (
    public name: string,

    public milesToGoal: number,
    public daysRemaining: number,

    // Stats
    public speed: number,
    public healing: number,
    public gathering: number,

    public hp: number,
    public crystals: number
  ) {}

}
