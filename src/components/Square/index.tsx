import { SquareProps } from "../../interfaces/iSquareProps";
import * as S from "../../styles/style";

export function Square({ value, onSquareClick }: SquareProps) {
    return (
        <>
            <S.Square onClick={onSquareClick}>{value}</S.Square>
        </>
    );
}
