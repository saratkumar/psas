function linearGradient(color, colorState, angle = 195) {
    return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
};

const commonConfig = {
    linearGradient: linearGradient
}

export default commonConfig;