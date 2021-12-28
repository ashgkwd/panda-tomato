import { differenceInSeconds, remaining } from "./clockUtils";

test("gives difference in seconds", () => {
  const a = new Date();
  const b = new Date(a.getTime() + 100000);
  expect(differenceInSeconds(a, b)).toBe(100);
});

test("gives remaining minutes and seconds", () => {
  const a = new Date();
  const b = new Date(a.getTime() + 100000);
  const [minutes, seconds] = remaining(a, b);
  expect(minutes).toBe(1);
  expect(seconds).toBe(40);
});

test("gives remaining minutes and seconds for sample data", () => {
  const a = new Date();
  const sampleInput = [10, 300, 4000, 6000, 4934, 3823, 3000003, 3992334, 1500];
  const sampleOutput = [
    [0, 10],
    [5, 0],
    [66, 40],
    [100, 0],
    [82, 14],
    [63, 43],
    [50000, 3],
    [66538, 54],
    [25, 0],
  ];

  sampleInput.forEach((val, index) => {
    const [minutes, seconds] = remaining(a, new Date(a.getTime() + val * 1000));
    expect(minutes).toBe(sampleOutput[index][0]);
    expect(seconds).toBe(sampleOutput[index][1]);
  });
});

test("remaining in future is always zero", () => {
  const a = new Date();
  const b = new Date(a.getTime() - 100000);
  const [minutes, seconds] = remaining(a, b);
  expect(minutes).toBe(0);
  expect(seconds).toBe(0);
});
