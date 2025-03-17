// Simulate API delays for realism
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));