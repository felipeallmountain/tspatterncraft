export default interface ITankState {
  readonly damage: number
  readonly mode: string
  readonly color: string
  readonly radius: [string, string]
  move(x: number, y: number): void
  attack(): void
  toTankMode(): void
  toSiegeMode(): void
  toFlyMode(): void
}