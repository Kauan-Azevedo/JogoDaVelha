import styled from "styled-components";

export const Container = styled("div")`
    max-width: 1226px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Board = styled("div")`
    min-width: 200px;
    min-height: 100px;
    border-radius: 10px;
`;

export const BoardRow = styled("div")`
    width: 100%;
    display: flex;
`;

export const Square = styled("button")`
    width: 100%;
    min-height: 60px;
    background-color: transparent;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border: 2px solid gray;
    cursor: pointer;
`;

export const Status = styled("div")`
    width: 100%;
    font-weight: 200;
    text-align: center;
`;
