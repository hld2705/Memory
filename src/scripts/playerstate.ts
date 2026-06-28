export const playerState: PlayerState = {
    currentPlayer: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
    flippedCards: [],
    locked: false,
    matchedPairs: 0,
    totalPairs: 0
}

export type PlayerState = {
    currentPlayer: number;
    playerOneScore: number;
    playerTwoScore: number;
    flippedCards: HTMLElement[];
    locked: boolean;
    matchedPairs: number;
    totalPairs: number;
}

/**
 * Interface for the winner data, helping with shortening the functions
 */
export interface WinnerData {
    image: string;
    text: string;
    color: string;
    textDraw?: string;
}