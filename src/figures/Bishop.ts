import { IFigure } from "./Figure"

export class Bishop implements IFigure {
    constructor(color: boolean, coordinateI: number, coordinateJ: number) {
        this.color = color
        this.coordinateI = coordinateI
        this.coordinateJ = coordinateJ
        this.type = "bishop"
    }
    color: boolean
    coordinateI: number
    coordinateJ: number
    type: string

    canMove(targetI: number, targetJ: number): boolean | undefined {
        for (let i = 0; i < 7; i++) {
            if (
                (this.coordinateI - i === targetI && this.coordinateJ + i === targetJ) ||
                (this.coordinateI + i === targetI && this.coordinateJ - i === targetJ) ||
                (this.coordinateI + i === targetI && this.coordinateJ + i === targetJ) ||
                (this.coordinateI - i === targetI && this.coordinateJ - i === targetJ)
            ) {
                return true
            }
        }
    }

    move(targetI: number, targetJ: number): void {
        this.coordinateI = targetI
        this.coordinateJ = targetJ
    }

    die() {
        this.coordinateI = -1
        this.coordinateJ = -1
    }
}
