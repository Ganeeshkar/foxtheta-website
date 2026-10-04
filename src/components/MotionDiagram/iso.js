// A single projection keeps every plate, cut-out and connector on the same
// 30-degree isometric grid. All coordinates are original Foxtheta artwork.
export const project = (x, y, z = 0) => [+(0.866 * (x - y)).toFixed(2), +((x + y) * 0.5 - z).toFixed(2)];
export const polygon = points => points.map(p => project(...p).join(",")).join(" ");
export const pathOf = points => "M" + points.map(p => project(...p).join(" ")).join("L");
