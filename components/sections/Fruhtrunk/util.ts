const maxStroke = 60;
const stroke = 30;

const lines = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${(maxStroke - stroke) / 2}px, rgba(255,255,255,1) ${(maxStroke - stroke) / 2}px, rgba(255,255,255,1) ${stroke}px, rgba(0,0,0,0) ${stroke}px, rgba(0,0,0,0) ${maxStroke})`;

function getGradient(stroke: number) {
    return `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${(maxStroke - stroke) / 2}px, rgba(255,255,255,1) ${(maxStroke - stroke) / 2}px, rgba(255,255,255,1) ${stroke}px, rgba(0,0,0,0) ${stroke}px, rgba(0,0,0,0) ${maxStroke})`;
}

export const zeroGradient = getGradient(0);
export const fullGradient = getGradient(30);
